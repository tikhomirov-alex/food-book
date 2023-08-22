import { Schema, Types, model } from 'mongoose'

const LikeSchema = new Schema(
  {
    from: { type: Types.ObjectId, ref: 'User' },
    to: { type: Types.ObjectId, ref: 'Comment' },
  },
  {
    timestamps: false,
  }
)

const Like = model('Like', LikeSchema)
export default Like
