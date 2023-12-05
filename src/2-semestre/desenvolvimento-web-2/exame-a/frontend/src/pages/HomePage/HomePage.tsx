import "./HomePage.scss"

import type { TBaseName } from "~/schemas"
import { useNames } from "~/hooks"
import type { TNameForm } from "~/components"
import { NameForm, NameList } from "~/components"

export default function HomePage() {
  const { names, createName, removeName, reorderNames } = useNames()

  const handleSubmit: TNameForm["handleSubmit"] = (event, name) => {
    event.preventDefault()

    if (!name) return

    createName(name)
  }

  const handleRemove = (id: number) => {
    removeName(id)
  }

  const handleReorder = (orderBy: keyof TBaseName) => {
    reorderNames(orderBy)
  }

  return (
    <main className="home-page">
      <h1 className="hp-title">Cara-crachá</h1>

      <NameForm handleSubmit={handleSubmit} />

      <NameList names={names} handleLeftClick={handleReorder} handleRightClick={handleRemove} />
    </main>
  )
}
