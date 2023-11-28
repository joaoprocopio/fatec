import "dotenv/config"

import express from "express"
import morgan from "morgan"

import { settings } from "~/settings"
import { logger } from "~/logger"

const app = express()

app.use(
  morgan("tiny", {
    stream: {
      write: (message) => logger.http(message.trim())
    }
  })
)

app.listen(settings.EXPRESS_PORT, settings.EXPRESS_HOST, () => {
  logger.info(`Server is running on http://${settings.EXPRESS_HOST}:${settings.EXPRESS_PORT}`)
})
