import { validationResult } from 'express-validator'
import { Controller } from '../types'
import Comment from '../models/Comment'
import Recipe from '../models/Recipe'
import Rate from '../models/Rate'

export const addComment: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const user = req.params.id
    const { to, text, photo, rate } = req.body

    const recipe = await Recipe.findById(to)
    if (!recipe) {
      return res.status(401).json({ msg: 'Recipe not found' })
    }

    const newComment = new Comment({ from: user, to, text, photo })
    await newComment.save()

    let result: any = { comment: newComment }

    if (rate) {

      const existsRate = await Rate.findOne({ from: user, to })

      const avg = recipe.avgRate ?? 0
      let count = recipe.rateCount ?? 0
      const currentRate = existsRate ? existsRate.rate ?? 0 : 0
      let totalRate = 0
      if (existsRate) {
        totalRate = avg * count - currentRate + rate
      } else {
        totalRate = avg * count++ + rate
      }

      await Recipe.updateOne(
        { id: to },
        { rateCount: count, avgRate: totalRate / count }
      )

      const newRate = new Rate({ from: user, to, rate })
      await newRate.save()

      result.rate = newRate
    }

    res.status(201).json(result)
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const editComment: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const commentId = req.params.id
    const { text, photo, rate } = req.body

    const comment = await Comment.findById(commentId)
    if (!comment) {
      return res.status(500).json({ msg: `Comment not found` })
    }
    await Comment.updateOne({ id: commentId }, { text, photo })

    const recipe = await Recipe.findById(comment.to)
    if (!recipe) {
      return res.status(401).json({ msg: 'Recipe not found' })
    }

    if (rate) {

      const existsRate = await Rate.findOne({ from: comment.from, to: comment.to })

      const avg = recipe.avgRate ?? 0
      let count = recipe.rateCount ?? 0
      const currentRate = existsRate ? existsRate.rate ?? 0 : 0
      let totalRate = 0
      if (existsRate) {
        totalRate = avg * count - currentRate + rate
        await Rate.updateOne({ from: comment.from, to: comment.to }, { rate })
      } else {
        totalRate = avg * count++ + rate
        const newRate = new Rate({ from: comment.from, to: comment.to, rate })
        await newRate.save()
      }

      await Recipe.updateOne(
        { id: comment.to },
        { rateCount: count, avgRate: totalRate / count, text, photo }
      )

    }

    res.status(203).json({ msg: 'Success' })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const deleteComment: Controller = async (req, res) => {
  try {
    const commentId = req.params.id
    const comment = await Comment.findById(commentId)

    if (!comment) {
      return res.status(500).json({ msg: `Comment not found` })
    }

    const recipe = await Recipe.findById(comment.to)
    if (!recipe) {
      return res.status(401).json({ msg: 'Recipe not found' })
    }

    await Comment.deleteOne({ id: commentId })
    res.status(204).json({ msg: 'Success' })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
