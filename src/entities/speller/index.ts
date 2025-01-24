export {
  CorrectMethod,
  type ErrorInfo,
  type CheckResponse,
  type BugReportPayload,
  type UserReplacePayload,
} from './model/speller-interface'
export { SpellerApi } from './api/speller-service'
export { useSpeller } from './model/use-speller'
export {
  spellerReducer,
  setSelectedErrIdx,
  type SpellerState,
} from './model/speller-slice'
export { logUserReplaceAction } from '../../pages/results/api/log-user-replace-action'
