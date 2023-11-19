import { promisify } from "util"

export const msToS = (ms: number) => ms * 1000

export const sleep = promisify(setTimeout)
