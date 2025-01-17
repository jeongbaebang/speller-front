'use client'

import React, { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { TextCounter } from '@/shared/ui/text-counter'

interface SpellerControlProps {
  count: number
  isSubmitted: boolean
}

const SpellerControl: FC<SpellerControlProps> = ({ count, isSubmitted }) => {
  const isButtonDisabled = count <= 0 || isSubmitted

  return (
    <div className='mt-2 flex flex-shrink-0 justify-between tab:mt-[0.625rem]'>
      <TextCounter count={count} />
      <Button type='submit' disabled={isButtonDisabled}>
        {isSubmitted ? '검사중...' : '검사하기'}
      </Button>
    </div>
  )
}

export { SpellerControl }
