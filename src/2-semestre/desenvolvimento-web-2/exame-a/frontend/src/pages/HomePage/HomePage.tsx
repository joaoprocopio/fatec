import "./HomePage.scss"

import { useColors } from "~/hooks"
import type { TNameForm } from "~/components"
import { NameForm } from "~/components"

export default function HomePage() {
  const handleSubmit: TNameForm["handleSubmit"] = async (event, name) => {
    event.preventDefault()

    if (!name) return
  }

  // const handleRemove = async (id: number) => {
  //   await ColorsServices.removeColor(id)

  //   const index = colors.findIndex((color) => color.id === id)

  //   if (!index) return setColors([])

  //   const newColors = colors.splice(index, 1)

  //   setColors(newColors)
  // }

  return (
    <main className="home-page">
      <h1 className="hp-title">Cara-crachá</h1>

      <NameForm handleSubmit={handleSubmit} />

      {/* <ColorList colors={colors} handleRemove={handleRemove} /> */}
    </main>
  )
}
