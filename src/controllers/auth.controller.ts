import User from '../models/User'
import { Controller } from '../types'
import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'

export const signup: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect signup data',
      })
    }

    const { email, password, username, firstname, lastname } = req.body

    const emailExists = await User.findOne({ email })
    if (emailExists) {
      return res.status(400).json({ msg: 'This email already uses.' })
    }

    let name = username
    if (name) {
      const usernameExists = await User.findOne({ username })
      if (usernameExists) {
        return res.status(400).json({ msg: 'This username already uses.' })
      }
    } else {
      const userNumber = await User.count() + 1
      name = `user${userNumber}`
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const user = new User({
      username: name,
      email,
      password: hashedPassword,
      firstname,
      lastname,
    })

    await user.save()

    const secret = process.env.JWT_SECRET
    if (!secret) {
      console.log(`Envvar JWT_SECRET is empty`)
      return res.status(500).json({ msg: 'Server error' })
    }
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '4h' })

    res
      .status(201)
      .json({
        token,
        userId: user.id,
        username: name,
        msg: `User ${name} created.`,
      })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const login: Controller = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        msg: 'Incorrect login data',
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ msg: 'User not found' })
    }

    const isMatch = await bcrypt.compare(password, user.password!)
    if (!isMatch) {
      return res.status(400).json({ msg: 'Incorrect password' })
    }

    const secret = process.env.JWT_SECRET || 'jwt_secret'

    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '4h' })

    res.json({ token, userId: user.id, username: user.username })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
