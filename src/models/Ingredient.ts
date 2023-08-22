import { Schema, Types, model } from 'mongoose'

const IngredientSchema = new Schema(
  {
    title: String,
    category: Types.ObjectId,
    onModerate: Boolean,
  },
  {
    timestamps: false,
  }
)

const Ingredient = model('Ingredient', IngredientSchema)
export default Ingredient
