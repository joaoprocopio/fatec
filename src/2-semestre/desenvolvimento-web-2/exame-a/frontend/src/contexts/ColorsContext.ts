import type { Dispatch, SetStateAction } from "react"
import { createContext } from "react"

import type { TColors } from "~/schemas"

export type TColorsContext = {
  colors: TColors
  setColors: Dispatch<SetStateAction<TColors>>
}

export const ColorsContextDefaultValues: TColorsContext = {
  colors: [],
  setColors: () => {}
}

export const ColorsContext = createContext<TColorsContext>(ColorsContextDefaultValues)
