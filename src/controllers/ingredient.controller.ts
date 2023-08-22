import { validationResult } from 'express-validator'
import { Controller } from '../types'
import Ingredient from '../models/Ingredient'

export const addIngredient: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title, category } = req.body
    const ingredient = Ingredient.find({ title })
    if (!ingredient) {
      return res.json({
        ingredient,
        msg: 'Ingredient already exists',
      })
    }

    const newIngredient = new Ingredient({ title, category })
    await newIngredient.save()

    res.status(201).json({ ingredient: newIngredient })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
