import { validationResult } from 'express-validator'
import { Controller } from '../types'
import RecipeCategory from '../models/RecipeCategory'

export const addRecipeCategory: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title, group } = req.body

    const recipeCategory = await RecipeCategory.findOne({ title })
    if (recipeCategory) {
      return res.json({
        recipeCategory,
        msg: 'Recipe category already exists',
      })
    }

    const newRecipeCategory = new RecipeCategory({ title, group })
    await newRecipeCategory.save()

    res.status(201).json({ recipeCategory: newRecipeCategory })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipeCategories: Controller = async (req, res) => {
  try {
    const id = req.params.id
    const groups = await RecipeCategory.find({ group: id })
    res.status(200).json({ groups })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
