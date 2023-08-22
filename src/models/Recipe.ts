import { Schema, Types, model } from 'mongoose'

const RecipeSchema = new Schema(
  {
    title: String,
    photo: String,
    description: String,
    composition: [
      {
        ingredient: Types.ObjectId,
        quantity: Number,
        unit: [
          'ml',
          'g',
          'pinch',
          'tablespoon',
          'teaspoon',
          'pack',
          'piece',
          'to taste',
        ],
      },
    ],
    info: String,
    recipeStages: [
      {
        photo: String,
        instructions: String,
      },
    ],
    national: { type: Types.ObjectId, ref: 'National' },
    author: { type: Types.ObjectId, ref: 'User' },
    rateCount: Number,
    avgRate: Number,
    onModerate: Boolean,
  },
  {
    timestamps: true,
  }
)

const Recipe = model('Recipe', RecipeSchema)
export default Recipe
