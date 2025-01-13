export interface UserReplaceRequest {
  errorWord: string // 오류 문자열
  replaceWord: string // 사용자가 입력한 대치어
  sentence: string // 오류 문자열을 포함한 주변 문맥 문자열 (오류 문자열 좌/우)
}
