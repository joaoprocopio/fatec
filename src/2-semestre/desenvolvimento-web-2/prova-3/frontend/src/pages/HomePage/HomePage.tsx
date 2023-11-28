import "./HomePage.scss"

import type { ChangeEventHandler, FormEventHandler } from "react"
import { useState } from "react"

import { toHex } from "~/helpers"
import { useColors } from "~/hooks"
import type { TBaseColor } from "~/schemas"
import { ColorsServices } from "~/services"

export default function HomePage() {
  const { colors, setColors } = useColors()
  const [color, setColor] = useState<TBaseColor>()

  const handleBeforeInput: FormEventHandler<HTMLInputElement> = (event) => {
    // Garante que o número colocado esteja entre 0 e 255
    const ValidHexPattern = /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm

    const value = event.currentTarget.value
    const char = (event as unknown as CompositionEvent).data
    const valid = ValidHexPattern.test(value + char)

    if (!valid) return event.preventDefault()

    return valid
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const { name, value } = event.target

    // @ts-expect-error aq da ruim
    setColor((color) => ({
      ...color,
      [name]: value
    }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
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
      <form onSubmit={handleSubmit}>
        <input name="red" placeholder="Vermelho" onChange={handleChange} onBeforeInput={handleBeforeInput} />
        <input name="blue" placeholder="Azul" onChange={handleChange} onBeforeInput={handleBeforeInput} />
        <input name="green" placeholder="Verde" onChange={handleChange} onBeforeInput={handleBeforeInput} />

        <button type="submit">Criar</button>
      </form>

      {JSON.stringify(color, null, 4)}

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
