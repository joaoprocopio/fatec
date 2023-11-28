import "./ColorForm.scss"

import type { ChangeEventHandler, FormEvent, FormEventHandler } from "react"
import { useState } from "react"

import type { TBaseColor } from "~/schemas"
import { ValidHexPattern } from "~/contants"

export type TColorForm = {
  handleSubmit: (event: FormEvent<HTMLFormElement>, color: TBaseColor) => void
}

export default function ColorForm({ handleSubmit }: TColorForm) {
  const [color, setColor] = useState<TBaseColor>({
    red: 0,
    green: 0,
    blue: 0
  })

  const handleBeforeInput: FormEventHandler<HTMLInputElement> = (event) => {
    const value = event.currentTarget.value
    const char = (event as unknown as CompositionEvent).data
    const valid = ValidHexPattern.test(value + char)

    if (!valid) return event.preventDefault()

    return valid
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const { name, value } = event.target

    setColor((color) => ({
      ...color,
      [name]: value
    }))
  }

  return (
    <form className="color-form" onSubmit={(event) => handleSubmit(event, color)}>
      <input
        className="cf-input"
        name="red"
        placeholder="Vermelho"
        defaultValue={color.red}
        onChange={handleChange}
        onBeforeInput={handleBeforeInput}
      />
      <input
        className="cf-input"
        name="blue"
        placeholder="Azul"
        defaultValue={color.blue}
        onChange={handleChange}
        onBeforeInput={handleBeforeInput}
      />
      <input
        className="cf-input"
        name="green"
        placeholder="Verde"
        defaultValue={color.green}
        onChange={handleChange}
        onBeforeInput={handleBeforeInput}
      />
      <button className="cf-submit" type="submit">
        Criar
      </button>
    </form>
  )
}
