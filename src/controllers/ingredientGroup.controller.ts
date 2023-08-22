import { validationResult } from 'express-validator'
import { Controller } from '../types'
import IngredientGroup from '../models/IngredientGroup'
import IngredientCategory from '../models/IngredientCategory'

export const addIngredientGroup: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title } = req.body
    const ingredientGroup = await IngredientGroup.findOne({ title })
    if (ingredientGroup) {
      return res.json({ ingredientGroup, msg: 'Ingredient group already exists' })
    }

    const newIngredientGroup = new IngredientGroup({ title })
    await newIngredientGroup.save()

    res.status(201).json({ ingredientGroup: newIngredientGroup })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getAllIngredientGroups: Controller = async (req, res) => {
  try {
    const groups = await IngredientGroup.find()
    res.status(200).json({ groups })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getIngredientGroup: Controller = async (req, res) => {
  try {
    const id = req.params.id
    const categories = IngredientCategory.find({ group: id })

    res.status(200).json({ group: categories })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
