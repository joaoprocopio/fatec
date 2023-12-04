import { useContext } from "react"

import { NamesContext } from "~/contexts"

export default function useNames() {
  return useContext(NamesContext)
}
