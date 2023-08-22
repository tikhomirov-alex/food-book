import National from '../models/National'
import Recipe from '../models/Recipe'
import { Controller } from '../types'
import { validationResult } from 'express-validator'

export const addNational: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect data',
      })
    }

    const { title } = req.body
    const national = await National.findOne({ title })
    if (national) {
      return res.json({ national, msg: 'National already exists' })
    }

    const newNational = new National({ title })
    await newNational.save()

    res.status(201).json({ national: newNational })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getAllNationals: Controller = async (req, res) => {
  try {
    const nationals = await National.find()
    res.status(200).json({ nationals })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const getNational: Controller = async (req, res) => {
  try {
    const national = req.params.id
    const nationalRecipes = Recipe.find({ national })

    res.status(200).json({ national: nationalRecipes })

  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
