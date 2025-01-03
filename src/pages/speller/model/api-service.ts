import { Client } from '@/shared/api/client'
import { CheckPayload, CheckResponse, CheckService } from './api-interface'
import { ENDPOINT } from '@/shared/model/constants'

class CheckApiService implements CheckService {
  readonly #client: Client
  static #instance: CheckApiService

  constructor() {
    this.#client = Client.Instance
  }

  static get Instance() {
    if (!this.#instance) {
      this.#instance = new CheckApiService()
    }
    return this.#instance
  }

  async check(payload: CheckPayload): Promise<CheckResponse> {
    return this.#client.post(ENDPOINT.CHECK, payload)
  }
}

export default CheckApiService.Instance
