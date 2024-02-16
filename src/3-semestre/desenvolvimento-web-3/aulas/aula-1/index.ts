import express from "express"

const app = express()

app.get("/", (_req, res) => {
  return res.json({
    hello: "world"
  })
})

app.listen(3000, () => {
  console.log("foi")
})
