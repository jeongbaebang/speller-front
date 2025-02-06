import { AxiosResponse } from 'axios'

import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import {
  SpellerService,
  UserReplacePayload,
  BugReportPayload,
} from '../model/speller-interface'
import {
  CheckPayload,
  CheckResponse,
  FeedbackPayload,
} from '../model/speller-schema'

class SpellerApiService implements SpellerService {
  readonly #client: Client

  constructor() {
    this.#client = Client.Instance
  }

  async check(payload: CheckPayload): Promise<AxiosResponse<CheckResponse>> {
    return this.#client.post(ENDPOINT.CHECK, payload)
  }

  async logUserReplace(payload: UserReplacePayload) {
    return this.#client.post(ENDPOINT.USER_REPLACE, payload)
  }

  async sendReport(payload: BugReportPayload) {
    return this.#client.post(ENDPOINT.BUG_REPORT, payload)
  }

  async notChange() {
    return this.#client.post(ENDPOINT.NOT_CHANGE) // FIXME: payload 추가
  }

  async sendReportMail(payload: FeedbackPayload) {
    return this.#client.post(ENDPOINT.SEND_REPORT_MAIL, payload)
  }
}

const SpellerApi = new SpellerApiService()

export { SpellerApi }
