import "./ColorListItem.scss"

import { useMemo } from "react"
import { toHex } from "~/helpers"
import type { TColor } from "~/schemas"

export type TColorListItem = {
  color: TColor
  handleRemove: () => void
}

export default function ColorListItem({ color, handleRemove }: TColorListItem) {
  const hex = useMemo(() => toHex(color), [color])

  return (
    <button className="color-list-item" onClick={handleRemove} style={{ backgroundColor: hex }}>
      <span className="cli-text">{hex}</span>
    </button>
  )
}
