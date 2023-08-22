import { Schema, Types, model } from 'mongoose'

const RecipeGroupSchema = new Schema(
  {
    title: String,
    onModerate: Boolean,
  },
  {
    timestamps: false,
  }
)

const RecipeGroup = model('RecipeGroup', RecipeGroupSchema)
export default RecipeGroup
