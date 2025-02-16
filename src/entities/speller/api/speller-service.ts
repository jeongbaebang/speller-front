import { AxiosResponse } from 'axios'

import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import { SpellerService, UserReplacePayload } from '../model/speller-interface'
import { CheckPayload, CheckResponse } from '../model/speller-schema'

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

  async notChange() {
    return this.#client.post(ENDPOINT.NOT_CHANGE) // FIXME: payload 추가
  }
}

const SpellerApi = new SpellerApiService()

export { SpellerApi }
