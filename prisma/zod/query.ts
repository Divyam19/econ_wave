import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const querySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
})

export interface Completequery extends z.infer<typeof querySchema> {
  users: CompleteUser[]
}

/**
 * relatedquerySchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedquerySchema: z.ZodSchema<Completequery> = z.lazy(() => querySchema.extend({
  users: relatedUserSchema.array(),
}))
