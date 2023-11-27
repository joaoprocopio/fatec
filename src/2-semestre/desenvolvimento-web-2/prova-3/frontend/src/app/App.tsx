import { RouterProvider } from "react-router-dom"

import { router } from "~/router"
import { ColorsProvider } from "~/contexts"

export default function App() {
  return (
    <ColorsProvider>
      <RouterProvider router={router} />
    </ColorsProvider>
  )
}
