import { z } from 'zod'

export const feedbackPayloadSchema = z.object({
  content: z.string(),
})

export type FeedbackPayload = z.infer<typeof feedbackPayloadSchema>
