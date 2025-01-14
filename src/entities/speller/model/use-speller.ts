'use client'

import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/lib/use-redux'
import {
  setStrickCheck,
  setText,
  SpellerState,
  updateResponse,
} from './speller-slice'

const useSpeller = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.speller)

  const handleTextChange = useCallback(
    (value: string) => {
      dispatch(setText(value))
    },
    [dispatch],
  )

  const toggleStrictCheck = useCallback(
    (value: boolean) => {
      dispatch(setStrickCheck(value))
    },
    [dispatch],
  )

  const handleReceiveResponse = useCallback(
    (payload: SpellerState['response']) => {
      dispatch(updateResponse(payload))
    },
    [dispatch],
  )

  return {
    ...state,
    handleTextChange,
    toggleStrictCheck,
    handleReceiveResponse,
  }
}

export { useSpeller }
