import { useAppDispatch, useAppSelector } from '@/shared/lib/use-redux'
import { setFlag, type FlagState } from './flag-slice'

const useFlag = () => {
  const dispatch = useAppDispatch()
  const flags = useAppSelector(state => state.flag)

  const handleFlag = (key: keyof FlagState, value: boolean) => {
    dispatch(setFlag({ key, value }))
  }

  return { ...flags, handleFlag }
}

export { useFlag }
