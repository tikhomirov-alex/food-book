import { Schema, Types, model } from 'mongoose'

const UserSchema = new Schema(
  {
    email: String,
    password: String,
    username: String,
    firstname: String,
    lastname: String,
    city: String,
    favs: [{ type: Types.ObjectId, ref: 'Recipe' }],
    isBanned: Boolean
  },
  {
    timestamps: true,
  }
)

const User = model('User', UserSchema)
export default User
