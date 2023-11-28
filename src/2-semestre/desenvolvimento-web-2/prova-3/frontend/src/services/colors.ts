import { HttpClient } from "~/services/clients"

import type { TBaseColor } from "~/schemas"
import { Color, Colors } from "~/schemas"

export const getColors = async () => {
  const response = await HttpClient.get("/")

  return Colors.parse(response.data)
}

export const createColor = async ({ red, green, blue }: TBaseColor) => {
  const response = await HttpClient.get(`/${red}/${green}/${blue}`)

  return Color.parse(response.data)
}

export const removeColor = async (id: number | string) => {
  const response = await HttpClient.get(`/${id}`)

  return response.data
}
