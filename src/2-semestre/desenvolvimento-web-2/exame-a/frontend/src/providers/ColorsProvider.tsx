import type { ReactNode } from "react"
import { useEffect, useState } from "react"

import type { TColors } from "~/schemas"
import { ColorsServices } from "~/services"
import { ColorsContext, ColorsContextDefaultValues } from "~/contexts"

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
