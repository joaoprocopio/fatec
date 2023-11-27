import { z } from "zod"

export const Color = z.object({
  id: z.number(),
  red: z.number(),
  green: z.number(),
  blue: z.number()
})
export type TColor = z.infer<typeof Color>

export const Colors = z.array(Color)
export type TColors = z.infer<typeof Colors>
