import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'
import { UserReplaceRequest } from '../models/user-replace.interface'
import axios from 'axios'

export const useUserReplace = () => {
  const logUserReplace = async (payload: UserReplaceRequest) => {
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

  return { logUserReplace }
}
