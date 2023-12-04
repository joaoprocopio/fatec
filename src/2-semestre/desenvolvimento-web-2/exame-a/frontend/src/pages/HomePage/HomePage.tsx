import "./HomePage.scss"

import { useNames } from "~/hooks"
import type { TNameForm } from "~/components"
import { NameForm, NameList } from "~/components"

export default function HomePage() {
  const { names } = useNames()

  const handleSubmit: TNameForm["handleSubmit"] = async (event, name) => {
    event.preventDefault()

    if (!name) return
  }

  const handleRemove = async (id: number) => {}

  return (
    <main className="home-page">
      <h1 className="hp-title">Cara-crachá</h1>

      <NameForm handleSubmit={handleSubmit} />

      <NameList names={names} handleRemove={handleRemove} />
    </main>
  )
}
