import { Client } from '@/shared/api/client'
import { ENDPOINT } from '@/shared/model/constants'

export const useSendReport = () => {
  const handleSend = async (content: string) => {
    await Client.Instance.post(ENDPOINT.BUG_REPORT, { content })
  }

  return { handleSend }
}
