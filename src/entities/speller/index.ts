export type { CheckResponse } from './model/api-interface'
export { spellerApiService } from './model/api-service'
export { useSpeller } from './model/use-speller'
export {
  spellerReducer,
  setSelectedErrIdx,
  type SpellerState,
} from './model/speller-slice'
export { logUserReplaceAction } from './api/log-user-replace-action'
