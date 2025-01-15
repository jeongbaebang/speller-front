'use client'

import React, { FC, useCallback, useState } from 'react'

import { Textarea } from '@/shared/ui/textarea'
import { ClearTextButton } from './clear-text-button'
import { ScrollGradientFade } from '@/shared/ui/scroll-gradient-fade'

interface SpellerTextInputProps {
  text: string
  onTextChange: (value: string) => void
}

const SpellerTextInput: FC<SpellerTextInputProps> = ({
  onTextChange,
  text,
}) => {
  const [showGradient, setShowGradient] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnClear = useCallback(() => onTextChange(''), [])
  const handleScroll = useCallback(
    (isScrolling: boolean) => setShowGradient(isScrolling),
    [],
  )

  return (
    <>
      <div className='mb-[1rem] flex justify-between'>
        <h1 className='text-[1.125rem] font-semibold leading-[1.9125rem] tracking-[-0.0225rem] text-slate-600 tab:text-[1.375rem] tab:leading-[2.3375rem] tab:tracking-[-0.0275rem]'>
          원문
        </h1>
        <ClearTextButton onClear={handleOnClear} />
      </div>
      {/* 텍스트 입력 */}
      <div className='min-w-0 flex-1'>
        <Textarea
          value={text}
          onChange={onTextChange}
          onScroll={handleScroll}
          placeholder='내용을 입력해 주세요.'
        />
        <input type='hidden' name='text' value={text} />
        {/* 스크롤 시 그라디언트 블러 도형 표시 */}
        <ScrollGradientFade showGradient={showGradient} />
      </div>
    </>
  )
}

export { SpellerTextInput }
