import { createContext } from "react"

import type { TNames } from "~/schemas"

export type TNamesContext = {
  names: TNames
  createName: (name: string) => void
  removeName: (id: string | number) => void
}

export const NamesContextDefaultValues: TNamesContext = {
  names: [],
  createName: async () => {},
  removeName: async () => {}
}

export const NamesContext = createContext<TNamesContext>(NamesContextDefaultValues)
