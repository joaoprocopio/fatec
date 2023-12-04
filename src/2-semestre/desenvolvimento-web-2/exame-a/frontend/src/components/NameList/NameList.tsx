import "./NameList.scss"

import type { TNames } from "~/schemas"
import { NameListItem } from "~/components"

export type TNameList = {
  names: TNames
  handleRemove: (id: number) => void
}

export default function NameList({ names, handleRemove }: TNameList) {
  return (
    <div className="name-list">
      {names.map((name) => (
        <NameListItem key={name.id} name={name} handleRemove={() => handleRemove(name.id)} />
      ))}
    </div>
  )
}
