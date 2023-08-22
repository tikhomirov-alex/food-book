import { Schema, Types, model } from 'mongoose'

const RecipeCategorySchema = new Schema(
  {
    title: String,
    group: Types.ObjectId,
    onModerate: Boolean,
  },
  {
    timestamps: false,
  }
)

const RecipeCategory = model('RecipeCategory', RecipeCategorySchema)
export default RecipeCategory
