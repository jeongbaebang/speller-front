'use server'

import axios from 'axios'
import {
  SpellerApi,
  clickReplacePayloadSchema,
  type ClickReplacePayload,
} from '@/entities/speller'

export const logClickReplaceAction = async (payload: ClickReplacePayload) => {
  try {
    const validateClickReplacePayload = clickReplacePayloadSchema.parse(payload)
    await SpellerApi.logClickReplace(validateClickReplacePayload)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
