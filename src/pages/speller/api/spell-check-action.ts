'use server'

import {
  SpellerApi,
  type SpellerState,
  checkPayloadSchema,
  checkResponseSchema,
} from '@/entities/speller'

export type ActionState = {
  data: SpellerState['response'] | null
  error: unknown
}

const spellCheckAction = async (
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> => {
  try {
    const text = formData.get('text') as string
    const isStrictCheck = formData.get('isStrictCheck') === 'on'

    const validateCheckPayload = checkPayloadSchema.safeParse({
      text,
      isStrictCheck,
    })

    if (!validateCheckPayload.success) {
      throw new Error(validateCheckPayload.error.message)
    }

    const { data } = await SpellerApi.check(validateCheckPayload.data)

    const validateCheckResponse = checkResponseSchema.safeParse(data)

    if (!validateCheckResponse.success) {
      throw new Error(validateCheckResponse.error.message)
    }

    return {
      data: {
        ...validateCheckResponse.data,
        requestedWithStrictMode: isStrictCheck,
      },
      error: null,
    }
  } catch (error) {
    return {
      data: null,
      error,
    }
  }
}

export { spellCheckAction }
