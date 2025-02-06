'use server'

import axios from 'axios'
import { ZodError } from 'zod'

import {
  SpellerApi,
  type SpellerState,
  checkPayloadSchema,
  checkResponseSchema,
} from '@/entities/speller'

type ActionState = {
  data: SpellerState['response'] | null
  error: unknown
}

const spellCheckAction = async (
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const text = formData.get('speller-text') as string
    const isStrictCheck = formData.get('isStrictCheck') === 'on'
    const validateCheckPayload = checkPayloadSchema.parse({
      text,
      isStrictCheck,
    })
    const { data } = await SpellerApi.check(validateCheckPayload)
    const validateCheckResponse = checkResponseSchema.parse(data)

    return {
      data: {
        ...validateCheckResponse,
        requestedWithStrictMode: isStrictCheck,
      },
      error: null,
    }
  } catch (error) {
    let errorMessage: string = '에러가 발생하였습니다.'

    if (axios.isAxiosError(error)) {
      errorMessage = error.message
    }

    if (error instanceof ZodError) {
      errorMessage = String(error)
    }

    return {
      data: null,
      error: errorMessage,
    }
  }
}

export { spellCheckAction }
