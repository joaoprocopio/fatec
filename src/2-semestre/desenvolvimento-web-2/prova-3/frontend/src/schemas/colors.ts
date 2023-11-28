import { z } from "zod"

export const BaseColor = z.object({
  red: z.number(),
  green: z.number(),
  blue: z.number()
})
export type TBaseColor = z.infer<typeof BaseColor>

export const Color = BaseColor.extend({
  id: z.number()
})
export type TColor = z.infer<typeof Color>

export const Colors = z.array(Color)
export type TColors = z.infer<typeof Colors>
