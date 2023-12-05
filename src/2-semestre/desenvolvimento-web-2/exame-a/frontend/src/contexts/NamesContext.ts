import { createContext } from "react"

import type { TBaseName, TNames } from "~/schemas"

export type TNamesContext = {
  names: TNames
  createName: (name: string) => void
  removeName: (id: string | number) => void
  reorderNames: (orderBy: keyof TBaseName) => void
}

export const NamesContextDefaultValues: TNamesContext = {
  names: [],
  createName: async () => {},
  removeName: async () => {},
  reorderNames: async () => {}
}

export const NamesContext = createContext<TNamesContext>(NamesContextDefaultValues)
