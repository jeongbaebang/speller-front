import React, { FC, useCallback } from 'react'

import { Textarea } from '@/shared/ui/textarea/textarea'
import ClearButton from './clear-button'

interface SpellerTextInputProps {
  text: string
  onTextChange: (value: string) => void
}

const SpellerTextInput: FC<SpellerTextInputProps> = ({
  onTextChange,
  text,
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnClear = useCallback(() => onTextChange(''), [])

  return (
    <>
      <div className='mb-[0.56rem] flex justify-between tab:mb-[0.62rem]'>
        <h1 className='text-lg font-semibold tracking-[-0.0225rem]'>원문</h1>
        <ClearButton onClear={handleOnClear} />
      </div>
      {/* 텍스트 입력  */}
      <div className='flex-1'>
        <Textarea
          value={text}
          placeholder='내용을 입력해 주세요.'
          onChange={e => onTextChange(e.target.value)}
        />
      </div>
    </>
  )
}

export default SpellerTextInput
