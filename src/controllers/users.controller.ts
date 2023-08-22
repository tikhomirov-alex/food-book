import User from '../models/User'
import { Controller } from '../types'

export const getUser: Controller = async (req, res) => {
  try {

    const id = req.params.id
    const user = await User.findById(id)

    if (!user) {
      return res.status(400).json({ msg: 'User not found' })
    }

    res.status(200).json({ user })

  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
