import { Schema, Types, model } from 'mongoose'

const CommentSchema = new Schema(
  {
    from: Types.ObjectId,
    to: Types.ObjectId,
    text: String,
    photo: String,
    onModerate: Boolean,
  },
  {
    timestamps: true,
  }
)

const Comment = model('Comment', CommentSchema)
export default Comment
