import { validationResult } from 'express-validator'
import { Controller } from '../types'
import Recipe from '../models/Recipe'

export const addRecipe: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const user = req.params.user_id

    const {
      title,
      photo,
      description,
      composition,
      info,
      recipeStages,
      national,
    } = req.body

    const newRecipe = new Recipe({
      title,
      photo,
      description,
      composition,
      info,
      recipeStages,
      national,
      author: user,
      rateCount: 0,
      avgRate: 0,
    })

    await newRecipe.save()
    res.status(201).json({ recipe: newRecipe })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getAllRecipes: Controller = async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.status(200).json({ recipes })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipeById: Controller = async (req, res) => {
  try {
    const id = req.params.id
    const recipe = await Recipe.findById(id)
    res.status(200).json({ recipe })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipesByTitle: Controller = async (req, res) => {
  try {
    const textInTitle = req.params.title
    const regex = new RegExp(textInTitle, 'i')
    const recipes = await Recipe.find({ title: { $regex: regex } })

    res.status(200).json({ recipes })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipesByIngredient: Controller = async (req, res) => {
  try {
    const ingredient = req.params.ingredient

    const recipes = await Recipe.find({ 'composition.ingredient': ingredient })
    res.status(200).json({ recipes })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipesByNational: Controller = async (req, res) => {
  try {
    const national = req.params.national

    const recipes = await Recipe.find({ national })
    res.status(200).json({ recipes })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipesByAuthor: Controller = async (req, res) => {
  try {
    const author = req.params.user_id

    const recipes = await Recipe.find({ author })
    res.status(200).json({ recipes })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
