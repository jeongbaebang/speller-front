'use client'

import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/shared/lib/use-redux'
import {
  setText,
  updateResponse,
  updateCorrectInfo,
  type SpellerState,
} from './speller-slice'
import { CorrectInfo } from './speller-interface'

const useSpeller = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.speller)

  const handleTextChange = useCallback(
    (value: string) => {
      dispatch(setText(value))
    },
    [dispatch],
  )

  const handleReceiveResponse = useCallback(
    (payload: SpellerState['response']) => {
      dispatch(updateResponse(payload))
    },
    [dispatch],
  )

  const handleUpdateCorrectInfo = useCallback(
    (payload: CorrectInfo) => {
      dispatch(updateCorrectInfo(payload))
    },
    [dispatch],
  )

  return {
    ...state,
    handleTextChange,
    handleReceiveResponse,
    handleUpdateCorrectInfo,
  }
}

export { useSpeller }
