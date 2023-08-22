import { validationResult } from 'express-validator'
import { Controller } from '../types'
import IngredientCategory from '../models/IngredientCategory'

export const addIngredientCategory: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title, group } = req.body

    const ingredientCategory = await IngredientCategory.findOne({ title })
    if (ingredientCategory) {
      return res.json({
        ingredientCategory,
        msg: 'Ingredient category already exists',
      })
    }

    const newIngredientCategory = new IngredientCategory({ title, group })
    await newIngredientCategory.save()

    res.status(201).json({ ingredientCategory: newIngredientCategory })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getIngredientCategories: Controller = async (req, res) => {
  try {
    const id = req.params.id
    const groups = await IngredientCategory.find({ group: id })
    res.status(200).json({ groups })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
