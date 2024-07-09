import * as z from "zod"
import { Completeaddress, relatedaddressSchema, Completeproduct, relatedproductSchema } from "./index"

export const retailerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

export interface Completeretailer extends z.infer<typeof retailerSchema> {
  address?: Completeaddress | null
  products: Completeproduct[]
}

/**
 * relatedretailerSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedretailerSchema: z.ZodSchema<Completeretailer> = z.lazy(() => retailerSchema.extend({
  address: relatedaddressSchema.nullish(),
  products: relatedproductSchema.array(),
}))
