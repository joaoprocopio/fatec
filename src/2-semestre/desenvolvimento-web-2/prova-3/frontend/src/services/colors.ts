import { HttpClient } from "~/services/clients"

import { Colors } from "~/schemas"

export const getColors = async () => {
  const response = await HttpClient.get("/")

  return Colors.parse(response.data)
}
