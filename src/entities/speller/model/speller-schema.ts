import { z } from 'zod'

enum CorrectMethod {
  띄어쓰기 = 1,
  오탈자 = 2,
  문맥 = 3,
}

export const CorrectMethodEnum = z.nativeEnum(CorrectMethod)

export const errorInfoSchema = z.object({
  errorIdx: z.number(), // 에러 번호(0~n)
  correctMethod: z.number(), // 교정 방법 번호(1~n)
  start: z.number(), // str 안에서의 오류 문자열 시작 위치(0~n)
  end: z.number(), // str 안에서의 오류 문자열 끝 위치(0~n)
  orgStr: z.string(), // 오류 문자열
  candWord: z.string(), // 교정 대치어 문자열('|'로 구분)
  help: z.string(), // 도움말 내용
})

export const correctInfoSchema = errorInfoSchema.extend({
  crtStr: z.string().optional(),
})

export const checkPayloadSchema = z.object({
  text: z.string(), // 검사할 텍스트 내용
  isStrictCheck: z.boolean().optional(), // 강한 검사 여부
  pageIdx: z.number().optional(), // 현재 페이지 번호
})

export const checkResponseSchema = z.object({
  str: z.string(), // 현재 페이지에서 검사한 텍스트 전체
  errInfo: z.array(errorInfoSchema),
  totalPageCnt: z.number(), // 전체 페이지 수(1~n)
  remaningText: z.string(), // 다음 페이지에서 검사해야 할 나머지 텍스트
})

export const feedbackPayloadSchema = z.object({
  content: z.string(), // 사용자 의견 내용
})

export type ErrorInfo = z.infer<typeof errorInfoSchema>
export type CorrectInfo = z.infer<typeof correctInfoSchema>
export type CheckPayload = z.infer<typeof checkPayloadSchema>
export type CheckResponse = z.infer<typeof checkResponseSchema>
export type FeedbackPayload = z.infer<typeof feedbackPayloadSchema>
