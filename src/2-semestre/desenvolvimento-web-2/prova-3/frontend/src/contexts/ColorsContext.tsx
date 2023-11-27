import { ReactNode, createContext, useEffect, useState } from "react"

import type { TColors } from "~/schemas"
import { ColorsServices } from "~/services"

const ColorsContextDefaultValues: TColorsContext = {
  colors: []
}

export type TColorsContext = {
  colors: TColors
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
  }, [])

  return <ColorsContext.Provider value={{ colors }}>{children}</ColorsContext.Provider>
}
