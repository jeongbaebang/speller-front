'use client'

import React from 'react'
import Image from 'next/image'
import { useClipboard } from '@frontend-opensource/use-react-hooks'

import { Button } from '@/shared/ui/button'
import { TextCounter } from '@/shared/ui/text-counter'
import { useSpeller } from '@/entities/speller'
import { useRouter } from 'next/navigation'

const ResultsControl = () => {
  const {
    response: { str },
  } = useSpeller()
  const router = useRouter()
  const { copyText } = useClipboard()

  return (
    <div className='mt-2 flex flex-shrink-0 justify-between'>
      <TextCounter count={str.length} />
      <div className='flex gap-3'>
        <ActionButton
          icon='/arrow-return-left.svg'
          label='돌아가기'
          ariaLabel='페이지 돌아가기'
          onClick={() => router.push('/speller')}
        />
        <ActionButton
          icon='/copy.svg'
          label='복사하기'
          ariaLabel='텍스트 복사하기'
          onClick={() => copyText(str)}
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
      <div className='relative size-[1.5rem]'>
        <Image
          className='object-contain'
          src={icon}
          fill
          alt=''
          aria-hidden='true'
        />
      </div>
      <p className='text-[1rem] font-medium leading-[1.6rem] text-slate-400'>
        {label}
      </p>
    </div>
  </Button>
)

export { ResultsControl }
