import { createContext } from "react"

import type { TNames } from "~/schemas"

export type TNamesContext = {
  names: TNames
}

export const NamesContextDefaultValues: TNamesContext = {
  names: []
}

export const NamesContext = createContext<TNamesContext>(NamesContextDefaultValues)
