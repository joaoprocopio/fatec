import "./ColorList.scss"

import type { TColors } from "~/schemas"

import { ColorListItem } from "~/components"

export type TColorList = {
  colors: TColors
  handleRemove: (id: number) => void
}

export default function ColorList({ colors, handleRemove }: TColorList) {
  return (
    <div className="color-list">
      {colors.map((color) => (
        <ColorListItem key={color.id} color={color} handleRemove={() => handleRemove(color.id)} />
      ))}
    </div>
  )
}
