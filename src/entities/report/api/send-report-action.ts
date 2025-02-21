'use server'

import axios from 'axios'
import { BugReportPayload } from '../model/report-interface'
import { ReportApi } from './report-service'

export const sendReportAction = async (payload: BugReportPayload) => {
  try {
    await ReportApi.sendReport(payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
