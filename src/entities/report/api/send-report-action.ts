'use server'

import axios from 'axios'
import { SpellerApi, type BugReportPayload } from '@/entities/speller'

export const sendReportAction = async (payload: BugReportPayload) => {
  try {
    await SpellerApi.sendReport(payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
