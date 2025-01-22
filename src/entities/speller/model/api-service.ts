import { AxiosResponse } from 'axios'

import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import { CheckPayload, CheckResponse, ApiService } from './api-interface'

class SpellerApiService implements ApiService {
  readonly #client: Client

  constructor() {
    this.#client = Client.Instance
  }

  async check(payload: CheckPayload): Promise<AxiosResponse<CheckResponse>> {
    return this.#client.post(ENDPOINT.CHECK, payload)
  }
}

const spellerApiService = new SpellerApiService()

export { spellerApiService }
