import { Schema, Types, model } from 'mongoose'

const IngredientGroupSchema = new Schema(
  {
    title: String,
    onModerate: Boolean,
  },
  {
    timestamps: false,
  }
)

const IngredientGroup = model('IngredientGroup', IngredientGroupSchema)
export default IngredientGroup
