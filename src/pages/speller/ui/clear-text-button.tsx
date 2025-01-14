import Image from 'next/image'
import { FC, memo } from 'react'

import { Button } from '@/shared/ui/button'

interface ClearTextButtonProps {
  onClear: () => void
}

const ClearTextButton: FC<ClearTextButtonProps> = memo(({ onClear }) => {
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={onClear}
      aria-label='문장 삭제'
      className='relative size-4 self-center outline-none hover:bg-transparent focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-4 focus-visible:ring-offset-white tab:size-5'
      type='button'
    >
      <Image
        className='object-cover'
        src='/close.svg'
        fill
        /**
         alt 속성을 빈 값으로 설정:
         1. aria-hidden='true'로 이미지를 스크린리더에서 숨기고
         2. 상위 Button 컴포넌트의 aria-label로 "문장 삭제" 설명을 제공하므로
         3. 중복 음성 안내 방지를 위해 의도적으로 비워둠
         */
        alt=''
        aria-hidden='true'
      />
    </Button>
  )
})

ClearTextButton.displayName = 'ClearTextButton'

export { ClearTextButton }
