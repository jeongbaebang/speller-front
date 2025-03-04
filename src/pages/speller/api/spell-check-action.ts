'use server'

import axios from 'axios'
import { ZodError } from 'zod'

import {
  SpellerApi,
  type SpellerState,
  checkPayloadSchema,
  checkResponseSchema,
} from '@/entities/speller'
import { TIMEOUT_ERROR_CODE } from '../model/error-code'

type ActionState = {
  data: SpellerState['response'] | null
  error: unknown | { errorMessage: string; errorCode: number }
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
    let errorMessage: string =
      '[Error] spellCheckAction: 함수를 실행하는 동안 에러가 발생했습니다.'

    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { errorMessage, errorCode } = error.response.data

        if (errorCode === TIMEOUT_ERROR_CODE) {
          return {
            data: null,
            error: { errorMessage, errorCode },
          }
        }
      }
    }

    if (error instanceof ZodError) {
      errorMessage = error.message
    }

    return {
      data: null,
      error: errorMessage,
    }
  }
}

export { spellCheckAction }
