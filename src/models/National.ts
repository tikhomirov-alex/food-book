import { Schema, model } from 'mongoose'

const NationalSchema = new Schema(
  {
    title: String,
    onModerate: Boolean
  },
  {
    timestamps: false,
  }
)

const National = model('National', NationalSchema)
export default National
