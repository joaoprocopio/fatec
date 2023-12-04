import { z } from "zod"

export const BaseName = z.object({
  firstname: z.string(),
  lastname: z.string()
})
export type TBaseName = z.infer<typeof BaseName>

export const Name = BaseName.extend({
  id: z.number()
})
export type TName = z.infer<typeof Name>

export const Names = z.array(Name)
export type TNames = z.infer<typeof Names>
