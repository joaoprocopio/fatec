import type { ReactNode } from "react"
import { useEffect, useState } from "react"

import type { TBaseName, TNames } from "~/schemas"
import { NamesServices } from "~/services"
import { NamesContext, NamesContextDefaultValues } from "~/contexts"

export default function NamesProvider({ children }: { children: ReactNode }) {
  const [names, setNames] = useState<TNames>(NamesContextDefaultValues.names)
  const [orderBy] = useState<keyof TBaseName>("firstname")

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
    const getNames = async () => {
      const names = await NamesServices.getNames(orderBy)

      setNames(names)
    }

    getNames()
  }, [names.length, orderBy])

  return <NamesContext.Provider value={{ names, createName, removeName }}>{children}</NamesContext.Provider>
}
