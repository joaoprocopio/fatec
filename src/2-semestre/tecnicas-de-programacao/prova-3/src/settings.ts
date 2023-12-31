import path from "path"

const env = process.env

export const settings = {
  get EXPRESS_PORT() {
    return parseInt(env.EXPRESS_PORT!) || 8000
  },
  get EXPRESS_HOST() {
    return env.EXPRESS_HOST || "0.0.0.0"
  },
  get EXPRESS_ROOT() {
    return __dirname
  },

  get DB_PATH() {
    return path.join(settings.EXPRESS_ROOT, "./db.txt")
  }
} as const
