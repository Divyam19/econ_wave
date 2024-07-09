import * as z from "zod"
import { Completeretailer, relatedretailerSchema } from "./index"

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  type: z.string(),
  price: z.number().int(),
  retailerId: z.string(),
})

export interface Completeproduct extends z.infer<typeof productSchema> {
  retailer: Completeretailer
}

/**
 * relatedproductSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedproductSchema: z.ZodSchema<Completeproduct> = z.lazy(() => productSchema.extend({
  retailer: relatedretailerSchema,
}))
