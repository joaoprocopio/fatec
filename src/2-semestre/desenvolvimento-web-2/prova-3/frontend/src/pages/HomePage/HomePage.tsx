import "./HomePage.scss"

import { toHex } from "~/helpers"
import { useColors } from "~/hooks"
import { ColorsServices } from "~/services"
import type { TColorForm } from "~/components"
import { ColorForm } from "~/components"

export default function HomePage() {
  const { colors, setColors } = useColors()

  const handleSubmit: TColorForm["handleSubmit"] = async (event, color) => {
    event.preventDefault()

    if (!color) return

    const newColor = await ColorsServices.createColor(color)

    setColors((colors) => [...colors, newColor])
  }

  const handleRemoveColor = async (id: number) => {
    await ColorsServices.removeColor(id)

    const index = colors.findIndex((color) => color.id === id)

    if (!index) return setColors([])

    const newColors = colors.splice(index, 1)

    setColors(newColors)
  }

  return (
    <div>
      <ColorForm handleSubmit={handleSubmit} />

      <div>
        {colors.map((color) => {
          const hexColor = toHex(color)

          return (
            <button
              key={color.id}
              onClick={() => handleRemoveColor(color.id)}
              className="color"
              style={{ backgroundColor: hexColor }}>
              <p className="color-text">{hexColor}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
