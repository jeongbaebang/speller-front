import React, { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { cn } from '@/shared/lib/tailwind-merge'
import ArrowBottomIcon from '@/shared/ui/icon/icon-arrow-bottom.svg'

interface HelpSectionProps {
  help: string
}

const HelpSection = ({ help }: HelpSectionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div
      className={cn(
        'relative max-h-[4.5rem] overflow-hidden transition-[max-height,padding-bottom] duration-300 tab:max-h-[3.5rem] pc:mt-2 pc:max-h-12',
        isExpanded && '!max-h-full pb-6 tab:pb-7 pc:pb-6',
      )}
    >
      <p
        className='text-base tab:text-lg pc:text-base'
        dangerouslySetInnerHTML={{ __html: help }}
      />
      <Button
        variant={null}
        className={cn(
          'absolute bottom-0 right-0 h-6 gap-1 rounded-none bg-white p-0 text-sm font-normal text-slate-600 underline before:absolute before:bottom-0 before:right-full before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-white before:content-[""] tab:h-7 tab:text-base pc:h-auto',
          isExpanded && 'text-slate-400',
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '접기' : '자세히 보기'}
        <ArrowBottomIcon
          className={cn('!size-6', isExpanded ? 'rotate-180' : '')}
        />
      </Button>
    </div>
  )
}

export { HelpSection }
