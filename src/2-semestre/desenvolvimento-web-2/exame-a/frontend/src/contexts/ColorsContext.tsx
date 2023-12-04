import type { Dispatch, ReactNode, SetStateAction } from "react"
import { createContext, useEffect, useState } from "react"

import type { TColors } from "~/schemas"
import { ColorsServices } from "~/services"

const ColorsContextDefaultValues: TColorsContext = {
  colors: [],
  setColors: () => {}
}

export type TColorsContext = {
  colors: TColors
  setColors: Dispatch<SetStateAction<TColors>>
}

export const ColorsContext = createContext<TColorsContext>(ColorsContextDefaultValues)

export default function ColorsProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<TColors>(ColorsContextDefaultValues.colors)

  useEffect(() => {
    const getColors = async () => {
      const colors = await ColorsServices.getColors()

      setColors(colors)
    }

    getColors()
  }, [colors.length])

  return <ColorsContext.Provider value={{ colors, setColors }}>{children}</ColorsContext.Provider>
}
