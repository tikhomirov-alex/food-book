import { Schema, Types, model } from 'mongoose'

const RateSchema = new Schema(
  {
    from: { type: Types.ObjectId, ref: 'User' },
    to: { type: Types.ObjectId, ref: 'Recipe' },
    rate: Number,
  },
  {
    timestamps: false,
  }
)

const Rate = model('Rate', RateSchema)
export default Rate
