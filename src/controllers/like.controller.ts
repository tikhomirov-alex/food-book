import Like from '../models/Like'
import { Controller } from '../types'

export const setLike: Controller = async (req, res) => {
  try {
    const commentId = req.params.comment_id

    const { user } = req.body

    const like = new Like({ from: user, to: commentId })
    await like.save()

    res.status(201).json({ like })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}

export const unsetLike: Controller = async (req, res) => {
  try {
    const commentId = req.params.comment_id

    const { user } = req.body

    await Like.findOneAndDelete({ from: user, to: commentId })

    res.status(203).json({ msg: 'Success' })
  } catch (err) {
    res.status(500).json({ msg: `Server error: ${err}` })
  }
}
