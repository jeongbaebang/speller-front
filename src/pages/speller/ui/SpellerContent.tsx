import { FC, memo, useCallback } from 'react'

import ClearButton from '@/shared/ui/button/ClearButton'
import { Textarea } from '@/shared/ui/textarea/Textarea'
import TextCounter from '@/shared/ui/label/TextCounter'
import { Button } from '@/shared/ui/button/Button'

interface SpellerContentProps {
  text: string
  characterCount: number
  handleTextChange: (text: string) => void
}

const SpellerContent: FC<SpellerContentProps> = ({
  text,
  handleTextChange,
  characterCount,
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClearHandler = useCallback(() => handleTextChange(''), [])

  return (
    <div className='flex h-full w-full flex-col rounded-lg bg-white p-5 tab:rounded-[1rem] tab:p-10'>
      <div className='mb-[0.56rem] flex justify-between tab:mb-[0.62rem]'>
        <h1 className='text-lg font-semibold tracking-[-0.0225rem]'>원문</h1>
        <ClearButton onClear={onClearHandler} />
      </div>
      {/* 텍스트 입력  */}
      <div className='flex-1'>
        <Textarea
          value={text}
          placeholder='내용을 입력해 주세요.'
          onChange={e => handleTextChange(e.target.value)}
        />
      </div>
      {/* 글자수 & 검사하기 버튼 */}
      <div className='mt-5 flex flex-shrink-0 justify-between'>
        <TextCounter count={characterCount} />
        <MemoButton>검사하기</MemoButton>
      </div>
    </div>
  )
}

const MemoButton = memo(Button)

export default memo(SpellerContent, (prev, next) => {
  return prev.text === next.text
})
