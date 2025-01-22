export type {
  CheckResponse,
  BugReportPayload,
  UserReplacePayload,
} from './model/api-interface'
export { spellerApiService } from './api/api-service'
export { useSpeller } from './model/use-speller'
export {
  spellerReducer,
  setSelectedErrIdx,
  type SpellerState,
} from './model/speller-slice'
export { logUserReplaceAction } from '../../pages/results/api/log-user-replace-action'
