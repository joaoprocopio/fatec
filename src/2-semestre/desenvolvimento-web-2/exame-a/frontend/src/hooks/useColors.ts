import { useContext } from "react"

import { ColorsContext } from "~/contexts"

export default function useColors() {
  return useContext(ColorsContext)
}
