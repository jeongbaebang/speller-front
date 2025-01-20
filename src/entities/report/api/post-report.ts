'use server'

import { Client } from '@/shared/api/client'
import { BugReportRequest } from '../model/send-report.interface'
import { ENDPOINT } from '@/shared/model/constants'
import axios from 'axios'

export const sendReportAction = async (payload: BugReportRequest) => {
  try {
    await Client.Instance.post(ENDPOINT.BUG_REPORT, payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
