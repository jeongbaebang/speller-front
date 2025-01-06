import React, { FC } from 'react'
import Image from 'next/image'

import { Button } from '@/shared/ui/button'
import { TextCounter } from '@/shared/ui/text-counter'

interface ResultsControlProps {
  count: number
}

const ResultsControl: FC<ResultsControlProps> = ({ count }) => {
  return (
    <div className='mt-2 flex flex-shrink-0 justify-between'>
      <TextCounter count={count} />
      <div className='flex gap-3'>
        <ActionButton
          icon='/arrow-return-left.svg'
          label='돌아가기'
          ariaLabel='페이지 돌아가기'
        />
        <ActionButton
          icon='/copy.svg'
          label='복사하기'
          ariaLabel='텍스트 복사하기'
        />
      </div>
    </div>
  )
}

type ActionButtonProps = {
  icon: string
  label: string
  ariaLabel: string
  onClick?: () => void
}

const ActionButton = ({
  icon,
  label,
  ariaLabel,
  onClick,
}: ActionButtonProps) => (
  <Button
    variant='ghost'
    size='icon'
    aria-label={ariaLabel}
    onClick={onClick}
    className='size-fit p-1 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-4 focus-visible:ring-offset-white'
  >
    <div className='flex flex-col items-center justify-center'>
      <div className='relative size-[1.125rem]'>
        <Image
          className='object-contain'
          src={icon}
          fill
          alt=''
          aria-hidden='true'
        />
      </div>
      <p className='text-[0.875rem] font-normal leading-[1.4rem] text-slate-400'>
        {label}
      </p>
    </div>
  </Button>
)

export { ResultsControl }
