import { RouterProvider } from "react-router-dom"

import { router } from "~/router"
import { NamesProvider } from "~/providers"

export default function App() {
  return (
    <NamesProvider>
      <RouterProvider router={router} />
    </NamesProvider>
  )
}
