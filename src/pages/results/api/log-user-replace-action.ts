'use server'

import { SpellerApi, type UserReplacePayload } from '@/entities/speller'
import axios from 'axios'

export const logUserReplaceAction = async (payload: UserReplacePayload) => {
  try {
    await SpellerApi.logUserReplace(payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
