import { validationResult } from 'express-validator'
import { Controller } from '../types'
import RecipeGroup from '../models/RecipeGroup'
import RecipeCategory from '../models/RecipeCategory'

export const addRecipeGroup: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title } = req.body
    const recipeGroup = await RecipeGroup.findOne({ title })
    if (recipeGroup) {
      return res.json({
        recipeGroup,
        msg: 'Recipe group already exists',
      })
    }

    const newRecipeGroup = new RecipeGroup({ title })
    await newRecipeGroup.save()

    res.status(201).json({ recipeGroup: newRecipeGroup })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getAllRecipeGroups: Controller = async (req, res) => {
  try {
    const groups = await RecipeGroup.find()
    res.status(200).json({ groups })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getRecipeGroup: Controller = async (req, res) => {
  try {
    const id = req.params.id
    const categories = RecipeCategory.find({ group: id })

    res.status(200).json({ group: categories })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
