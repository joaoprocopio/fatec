import "dotenv/config"

import express from "express"
import morgan from "morgan"

import { logger } from "~/logger"
import { settings } from "~/settings"

const bootstrap = async () => {
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
}

bootstrap()
