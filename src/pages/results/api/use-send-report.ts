import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import { BugReportRequest } from '../models/send-report.interface'
import axios from 'axios'

export const useSendReport = () => {
  const sendReport = async (payload: BugReportRequest) => {
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

  return { sendReport }
}
