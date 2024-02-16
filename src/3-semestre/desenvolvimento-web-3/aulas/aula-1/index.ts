import cors from "cors"
import express from "express"
import helmet from "helmet"
import mongoose from "mongoose"

const settings = {
  port: 3000
}

const main = async () => {
  const app = express()

  await mongoose.connect("mongodb://localhost:27017/test")

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(helmet())

  const UserSchema = new mongoose.Schema({
    mail: {
      type: String,
      maxLength: 50,
      required: true
    }
  })

  const User = mongoose.model("User", UserSchema)

  const novo = new User({ mail: "asodijasodi" })
  novo.save()

  app.get("/", async (_req, res) => {
    const users = await User.find()

    return res.json({ users })
  })

  app.listen(settings.port, () => {
    console.log(`servidor rodando na porta ${settings.port}`)
  })
}

main()
