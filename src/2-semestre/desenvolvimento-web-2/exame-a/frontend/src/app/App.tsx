import { RouterProvider } from "react-router-dom"

import { router } from "~/router"
import { ColorsProvider } from "~/providers"

export default function App() {
  return (
    <ColorsProvider>
      <RouterProvider router={router} />
    </ColorsProvider>
  )
}
