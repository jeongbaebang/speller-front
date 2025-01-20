'use server'

import { UserReplaceRequest } from '@/pages/results/models/user-replace.interface'
import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import axios from 'axios'

export const logUserReplaceAction = async (payload: UserReplaceRequest) => {
  try {
    await Client.Instance.post(ENDPOINT.USER_REPLACE, payload)
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      throw new Error(String(error))
    }
  }
}
