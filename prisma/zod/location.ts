import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const locationSchema = z.object({
  id: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  userId: z.string(),
})

export interface Completelocation extends z.infer<typeof locationSchema> {
  user: CompleteUser
}

/**
 * relatedlocationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedlocationSchema: z.ZodSchema<Completelocation> = z.lazy(() => locationSchema.extend({
  user: relatedUserSchema,
}))
