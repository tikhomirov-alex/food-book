import Rate from '../models/Rate'
import Recipe from '../models/Recipe'
import { Controller } from '../types'

export const addRate: Controller = async (req, res) => {
  try {
    const recipeId = req.params.id
    const { user, rate } = req.body

    const recipe = await Recipe.findById(recipeId)
    if (!recipe) {
      return res.status(500).json({ msg: 'Recipe not found' })
    }

    const newRate = new Rate({ from: user, to: recipeId, rate })
    await newRate.save()

    const avgRate = recipe.avgRate ?? 0
    let count = recipe.rateCount ?? 0
    const totalRate = avgRate * count++ + rate

    await Recipe.updateOne(
      { id: recipeId },
      { rateCount: count, avgRate: totalRate / count }
    )

    res.status(201).json({ rate: newRate })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const editRate: Controller = async (req, res) => {
  try {
    const recipeId = req.params.id
    const { user, rate } = req.body

    const recipe = await Recipe.findById(recipeId)
    if (!recipe) {
      return res.status(500).json({ msg: 'Recipe not found' })
    }

    const existsRate = await Rate.findOne({ from: user, to: recipeId })
    if (!existsRate) {
      return res.status(500).json({ msg: 'Rate not found' })
    }
    await Rate.updateOne({ from: user, to: recipeId }, { rate })

    const avgRate = recipe.avgRate ?? 0
    const count = recipe.rateCount ?? 0
    const currentRate = existsRate.rate ?? 0
    const totalRate = avgRate * count - currentRate + rate

    await Recipe.updateOne({ id: recipeId }, { avgRate: totalRate / count })

    res.status(203).json({ msg: 'Success' })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
