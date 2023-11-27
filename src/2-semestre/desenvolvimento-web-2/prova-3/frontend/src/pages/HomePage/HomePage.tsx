import "./HomePage.scss"

import { useColors } from "~/hooks"
import { toHex } from "~/helpers"

export default function HomePage() {
  const { colors } = useColors()

  return (
    <div>
      <div>
        {colors.map((color) => {
          const hexColor = toHex(color)

          return (
            <div key={color.id} className="color" style={{ backgroundColor: hexColor }}>
              <p className="color-text">{JSON.stringify(color)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
