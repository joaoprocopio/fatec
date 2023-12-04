import "./NameForm.scss"

import type { ChangeEventHandler, FormEvent } from "react"
import { useState } from "react"

export type TNameForm = {
  handleSubmit: (event: FormEvent<HTMLFormElement>, color: string) => void
}

export default function NameForm({ handleSubmit }: TNameForm) {
  const [name, setName] = useState<string>("")

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    setName(event.target.value)
  }

  return (
    <form className="name-form" onSubmit={(event) => handleSubmit(event, name)}>
      <input className="nf-input" name="name" placeholder="Nome" onChange={handleChange} />

      <button className="nf-submit" type="submit">
        Enviar
      </button>
    </form>
  )
}
