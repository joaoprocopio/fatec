import express from "express"

export const app = express()

app.get("/", (req, res) => {
  res.json({
    hello: "world"
  })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
