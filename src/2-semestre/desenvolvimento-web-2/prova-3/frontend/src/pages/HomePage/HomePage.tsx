import "./HomePage.scss"

import { useColors } from "~/hooks"
import { ColorsServices } from "~/services"
import type { TColorForm } from "~/components"
import { ColorForm, ColorList } from "~/components"

export default function HomePage() {
  const { colors, setColors } = useColors()

  const handleSubmit: TColorForm["handleSubmit"] = async (event, color) => {
    event.preventDefault()

    if (!color) return

    const newColor = await ColorsServices.createColor(color)

    setColors((colors) => [...colors, newColor])
  }

  const handleRemove = async (id: number) => {
    await ColorsServices.removeColor(id)

    const index = colors.findIndex((color) => color.id === id)

    if (!index) return setColors([])

    const newColors = colors.splice(index, 1)

    setColors(newColors)
  }

  return (
    <div>
      <ColorForm handleSubmit={handleSubmit} />

      <ColorList colors={colors} handleRemove={handleRemove} />
    </div>
  )
}
