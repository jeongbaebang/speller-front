'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useSpeller } from '@/entities/speller'
import { ContentLayout } from '@/shared/ui/content-layout'
import { SpellerSetting } from './speller-setting'
import { SpellerTextInput } from './speller-text-input'
import { SpellerControl } from './speller-control'
import { spellCheckAction } from '../api/spell-check-action'

const SpellerPage = () => {
  const router = useRouter()
  const { text, handleTextChange, handleReceiveResponse } = useSpeller()
  const [state, formAction, isPending] = useActionState(spellCheckAction, {
    data: null,
    error: null,
  })

  useEffect(() => {
    if (state.data) {
      router.push('/results')
      handleReceiveResponse(state.data)
    }

    // TODO: Error Boundary 적용
    if (state.error) {
      console.error(state.error)
    }
  }, [state, router, handleReceiveResponse])

  useEffect(() => {
    router.prefetch('/results')
  }, [router])

  return (
    <form action={formAction} className='flex-1'>
      <ContentLayout className='pb-9 tab:pb-40 pc:pb-[3.06rem]'>
        {/* 강한 검사 */}
        <SpellerSetting />
        <div className='flex h-full w-full flex-col rounded-lg bg-white p-5 tab:rounded-[1rem] tab:p-10 tab:pb-6'>
          <SpellerTextInput text={text} onTextChange={handleTextChange} />
          {/* 글자수 & 검사하기 버튼 */}
          <SpellerControl count={text.length} isSubmitted={isPending} />
        </div>
      </ContentLayout>
    </form>
  )
}

export { SpellerPage }
