import "./NameListItem.scss"

import type { TName } from "~/schemas"

export type TNameListItem = {
  name: TName
  handleRemove: () => void
}

export default function NameListItem({ name, handleRemove }: TNameListItem) {
  return (
    <button className="name-list-item" onClick={handleRemove}>
      {name.firstname} {name.lastname}
    </button>
  )
}
