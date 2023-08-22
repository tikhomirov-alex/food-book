import { Schema, Types, model } from 'mongoose'

const IngredientCategorySchema = new Schema(
  {
    title: String,
    group: Types.ObjectId,
    onModerate: Boolean,
  },
  {
    timestamps: false,
  }
)

const IngredientCategory = model('IngredientCategory', IngredientCategorySchema)
export default IngredientCategory
