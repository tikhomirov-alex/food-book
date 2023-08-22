import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    const url = process.env.MONGO_URI
    if (!url) {
      throw new Error('Environment variable MONGO_URI undefined')
    }
    await mongoose.connect(url)
    console.log('Database connected...')
  } catch (err) {
    throw err
  }
}

export default dbConnect
