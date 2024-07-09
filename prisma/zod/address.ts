import * as z from "zod"
import { Completeretailer, relatedretailerSchema } from "./index"

export const addressSchema = z.object({
  id: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  retailerId: z.string(),
})

export interface Completeaddress extends z.infer<typeof addressSchema> {
  retailer: Completeretailer
}

/**
 * relatedaddressSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedaddressSchema: z.ZodSchema<Completeaddress> = z.lazy(() => addressSchema.extend({
  retailer: relatedretailerSchema,
}))
