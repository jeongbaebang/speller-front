import { Client } from '@/shared/api/client'
import { CheckPayload, CheckResponse, CheckService } from './api-interface'
import { ENDPOINT } from '@/shared/model/constants'

class CheckApiService implements CheckService {
  readonly #client: Client

  constructor() {
    this.#client = Client.Instance
  }

  async check(payload: CheckPayload): Promise<CheckResponse> {
    return this.#client.post(ENDPOINT.CHECK, payload)
  }
}

const checkApiServiceInstance = new CheckApiService()

export default checkApiServiceInstance
