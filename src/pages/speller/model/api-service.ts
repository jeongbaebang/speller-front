import { AxiosResponse } from 'axios'
import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import { CheckPayload, CheckResponse, CheckService } from './api-interface'

class CheckApiService implements CheckService {
  readonly #client: Client

  constructor() {
    this.#client = Client.Instance
  }

  async check(payload: CheckPayload): Promise<AxiosResponse<CheckResponse>> {
    return this.#client.post(ENDPOINT.CHECK, payload)
  }
}

const checkApiServiceInstance = new CheckApiService()

export default checkApiServiceInstance
