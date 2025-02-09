import axios from 'axios'
import { SpellerApi, type CheckPayload } from '@/entities/speller'

export const clientSpellCheck = async (payload: CheckPayload) => {
  try {
    const response = await SpellerApi.check(payload)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
