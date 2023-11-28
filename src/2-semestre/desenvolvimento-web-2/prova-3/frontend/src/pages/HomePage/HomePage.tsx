import "./HomePage.scss"

import type { ChangeEventHandler, FormEventHandler } from "react"
import { useState } from "react"

import { useColors } from "~/hooks"
import { toHex } from "~/helpers"
import { ColorsServices } from "~/services"
import { TBaseColor } from "~/schemas"

export default function HomePage() {
  const { colors, setColors } = useColors()
  const [color, setColor] = useState<TBaseColor>({
    red: 0,
    green: 0,
    blue: 0
  })

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const { name, value } = event.target

    setColor((color) => ({
      ...color,
      [name]: value
    }))
  }
  const handleBeforeInput: FormEventHandler<HTMLInputElement> = (event) => {
    // Garante que o número colocado esteja entre 0 e 255
    const ValidHexPattern = /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm

    const value = event.currentTarget.value
    const char = (event as unknown as CompositionEvent).data
    const valid = ValidHexPattern.test(value.toString() + char)

    if (!valid) return event.preventDefault()

    return valid
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const newColor = await ColorsServices.createColor(color)

    setColors((colors) => [...colors, newColor])
  }

  const handleRemoveColor = async (id: number) => {
    await ColorsServices.removeColor(id)

    const index = colors.findIndex((color) => color.id === id)
    const newColors = colors.splice(index, 1)

    setColors(newColors)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="red"
          placeholder="Vermelho"
          defaultValue={color.red}
          onChange={handleChange}
          onBeforeInput={handleBeforeInput}
        />
        <input
          name="blue"
          placeholder="Azul"
          defaultValue={color.blue}
          onChange={handleChange}
          onBeforeInput={handleBeforeInput}
        />
        <input
          name="green"
          placeholder="Verde"
          defaultValue={color.green}
          onChange={handleChange}
          onBeforeInput={handleBeforeInput}
        />

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
