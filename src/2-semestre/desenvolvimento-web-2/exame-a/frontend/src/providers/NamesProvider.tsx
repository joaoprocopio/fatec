import type { ReactNode } from "react"
import { useEffect, useState } from "react"

import type { TNames } from "~/schemas"
import { NamesServices } from "~/services"
import { NamesContext, NamesContextDefaultValues } from "~/contexts"

export default function NamesProvider({ children }: { children: ReactNode }) {
  const [names, setNames] = useState<TNames>(NamesContextDefaultValues.names)

  const createName = async (_name: string) => {
    const name = _name.trim().split(" ")

    const firstname = name[0]
    const lastname = name[name.length - 1]

    const createdName = await NamesServices.createName({ firstname, lastname })

    setNames((oldNames) => [...oldNames, createdName])
  }

  const removeName = async (id: string | number) => {
    await NamesServices.removeName(id)

    setNames((oldNames) => oldNames.filter((name) => name.id !== id))
  }

  useEffect(() => {
    const getColors = async () => {
      const names = await NamesServices.getNames()

      setNames(names)
    }

    getColors()
  }, [names.length])

  return <NamesContext.Provider value={{ names, createName, removeName }}>{children}</NamesContext.Provider>
}
