import { HttpClient } from "~/services/clients"

import type { TBaseName } from "~/schemas"
import { Name, Names } from "~/schemas"

export const getNames = async (orderBy: keyof TBaseName) => {
  const response = await HttpClient.get(`/list/${orderBy}`)

  return Names.parse(response.data)
}

export const createName = async ({ firstname, lastname }: TBaseName) => {
  const response = await HttpClient.get(`/create/${firstname}/${lastname}`)

  return Name.parse(response.data)
}

export const removeName = async (id: number | string) => {
  const response = await HttpClient.get(`/remove/${id}`)

  return response.data
}
