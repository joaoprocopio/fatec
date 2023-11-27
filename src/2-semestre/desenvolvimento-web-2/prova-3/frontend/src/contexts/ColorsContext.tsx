import { ReactNode, createContext, useEffect, useState } from "react"

import type { TColors } from "~/schemas"
import { ColorsServices } from "~/services"

export const ColorsContext = createContext({})

export default function ColorsProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<TColors>([])

  useEffect(() => {
    const getColors = async () => {
      const colors = await ColorsServices.getColors()

      setColors(colors)
    }

    getColors()
  }, [])

  return <ColorsContext.Provider value={{ colors }}>{children}</ColorsContext.Provider>
}
