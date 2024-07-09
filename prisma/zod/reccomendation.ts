import * as z from "zod"
import { CompleteUser, relatedUserSchema } from "./index"

export const reccomendationSchema = z.object({
  id: z.string(),
  reccomendation: z.string().array(),
  userId: z.string(),
})

export interface Completereccomendation extends z.infer<typeof reccomendationSchema> {
  user: CompleteUser
}

/**
 * relatedreccomendationSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedreccomendationSchema: z.ZodSchema<Completereccomendation> = z.lazy(() => reccomendationSchema.extend({
  user: relatedUserSchema,
}))
