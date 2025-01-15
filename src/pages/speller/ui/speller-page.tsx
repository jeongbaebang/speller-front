'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useSpeller } from '@/entities/speller'
import { ContentLayout } from '@/shared/ui/content-layout'
import { SpellerSetting } from './speller-setting'
import { SpellerTextInput } from './speller-text-input'
import { SpellerControl } from './speller-control'
import { spellCheckAction } from '../model/spell-check-action'

const SpellerPage = () => {
  const router = useRouter()
  const {
    text,
    isStrictCheck,
    toggleStrictCheck,
    handleTextChange,
    handleReceiveResponse,
  } = useSpeller()
  const [state, formAction, isPending] = useActionState(spellCheckAction, {
    data: null,
    error: null,
  })

  useEffect(() => {
    if (state.data) {
      router.push('/results')
      handleReceiveResponse(state.data)
    }
  }, [state, router, handleReceiveResponse])

  useEffect(() => {
    router.prefetch('/results')
  }, [router])

  return (
    <form action={formAction} className='flex-1'>
      <ContentLayout className='tab:pb-[16rem] pc:pb-[3.12rem]'>
        {/* 강한 검사 */}
        <SpellerSetting
          checked={isStrictCheck}
          onCheckedChange={toggleStrictCheck}
        />
        <div className='flex h-full w-full flex-col rounded-lg bg-white p-5 tab:rounded-[1rem] tab:p-10'>
          <SpellerTextInput text={text} onTextChange={handleTextChange} />
          {/* 글자수 & 검사하기 버튼 */}
          <SpellerControl count={text.length} isSubmitted={isPending} />
        </div>
      </ContentLayout>
    </form>
  )
}

export { SpellerPage }
