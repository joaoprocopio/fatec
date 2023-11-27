import { useColors } from "~/hooks"

export default function HomePage() {
  const { colors } = useColors()

  return <div>{JSON.stringify(colors, null, 2)}</div>
}
