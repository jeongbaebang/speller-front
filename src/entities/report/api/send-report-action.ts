'use server'

import axios from 'axios'
import { BugReportPayload, spellerApiService } from '@/entities/speller'

export const sendReportAction = async (payload: BugReportPayload) => {
  try {
    await spellerApiService.sendReport(payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
