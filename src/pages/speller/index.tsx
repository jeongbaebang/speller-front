'use client'

import useSpeller from './model/use-speller'
import {
  SpellerContentLayout,
  SpellerControl,
  SpellerSetting,
  SpellerTextInput,
} from './ui'

const SpellerPage = () => {
  const {
    text,
    isStrongCheck,
    characterCount,
    setIsStrongCheck,
    handleTextChange,
  } = useSpeller()

  return (
    <SpellerContentLayout>
      {/* 강한 검사 */}
      <SpellerSetting
        checked={isStrongCheck}
        onCheckedChange={setIsStrongCheck}
      />
      <div className='flex h-full w-full flex-col rounded-lg bg-white p-5 tab:rounded-[1rem] tab:p-10'>
        <SpellerTextInput text={text} onTextChange={handleTextChange} />
        {/* 글자수 & 검사하기 버튼 */}
        <SpellerControl count={characterCount} />
      </div>
      {/* 레이아웃을 위한 하단 간격 */}
      <div className='min-h-8 tab:min-h-[3.12rem]' />
    </SpellerContentLayout>
  )
}

export default SpellerPage
