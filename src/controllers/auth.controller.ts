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

    const { email, password, username, firstname, lastname, city } = req.body
    
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      return res.status(400).json({ msg: 'User already exists.' })
    }

    let name: string = '@' + username
    if (!username) {
      const usersCount = User.count()
      name = `@user${usersCount}`
    }

    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    const user = new User({ username: name, email, password: hashedPassword, firstname, lastname, city })

    await user.save()

    res.status(201).json({ user, msg: `User ${name} created.` })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const login: Controller = async (req, res) => {
  try {

    console.log(req.body)

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

    const token = jwt.sign(
      {userId: user.id},
      secret,
      { expiresIn: '4h' }
    )

    res.json({ token, userId: user.id })

  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
