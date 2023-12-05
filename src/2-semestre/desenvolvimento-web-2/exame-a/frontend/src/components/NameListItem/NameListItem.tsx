import "./NameListItem.scss"

import type { TBaseName, TName } from "~/schemas"

export type TNameListItem = {
  name: TName
  handleLeftClick: (orderBy: keyof TBaseName) => void
  handleRightClick: (id: number) => void
}

export default function NameListItem({ name, handleLeftClick, handleRightClick }: TNameListItem) {
  return (
    <li className="name-list-item">
      <span
        className="nli-text"
        onClick={() => handleLeftClick("firstname")}
        onContextMenu={() => handleRightClick(name.id)}>
        {name.firstname}
      </span>
      <span
        className="nli-text"
        onClick={() => handleLeftClick("lastname")}
        onContextMenu={() => handleRightClick(name.id)}>
        {" "}
        {name.lastname}
      </span>
    </li>
  )
}
