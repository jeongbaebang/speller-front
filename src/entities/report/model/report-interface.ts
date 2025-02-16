export interface BugReportPayload {
  strTitle: string // 사용자 의견
  inputStr: string // 오류 문자열을 포함한 주변 문맥 문자열 (오류 문자열 좌/우)
  errorWord: string // 오류 문자열
  replaceWord: string // 교정 대치어들 문자열 (<br>로 구분)
  comment: string // 사용자 의견
}

export interface ReportService {
  sendReport: (payload: BugReportPayload) => void
}
