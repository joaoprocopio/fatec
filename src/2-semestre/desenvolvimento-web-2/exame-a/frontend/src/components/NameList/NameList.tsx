import "./NameList.scss"

import type { TNames } from "~/schemas"
import type { TNameListItem } from "~/components"
import { NameListItem } from "~/components"

export type TNameList = {
  names: TNames
  handleLeftClick: TNameListItem["handleLeftClick"]
  handleRightClick: TNameListItem["handleRightClick"]
}

export default function NameList({ names, handleLeftClick, handleRightClick }: TNameList) {
  return (
    <ul className="name-list">
      {names.map((name) => (
        <NameListItem key={name.id} name={name} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} />
      ))}
    </ul>
  )
}
