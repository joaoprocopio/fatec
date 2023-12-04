import type { ReactNode } from "react"
import { useEffect, useState } from "react"

import type { TNames } from "~/schemas"
import { NamesServices } from "~/services"
import { NamesContext, NamesContextDefaultValues } from "~/contexts"

export default function NamesProvider({ children }: { children: ReactNode }) {
  const [names, setNames] = useState<TNames>(NamesContextDefaultValues.names)

  useEffect(() => {
    const getColors = async () => {
      const names = await NamesServices.getNames()

      setNames(names)
    }

    getColors()
  }, [names.length])

  return <NamesContext.Provider value={{ names }}>{children}</NamesContext.Provider>
}
