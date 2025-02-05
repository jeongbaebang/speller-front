'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useSpeller } from '@/entities/speller'
import { spellCheckAction } from '../api/spell-check-action'

const Navigator = () => {
  const pathname = usePathname()
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const { response, handleReceiveResponse } = useSpeller()
  const currentPage = Number(searchParams?.get('page')) || 1

  const createPageURL = (nextPage: number) => {
    if (!searchParams) return `${pathname}`

    const params = new URLSearchParams(searchParams)
    params.set('page', nextPage.toString())
    return `${pathname}?${params.toString()}`
  }

  const handleSpellCheck = async (page: number) => {
    try {
      const data = await spellCheckAction({
        text: response.remaningText,
        isStrictCheck: response.requestedWithStrictMode,
        pageIdx: page,
      })
      console.log('data: ', data)
      handleReceiveResponse({
        ...data,
        requestedWithStrictMode: response.requestedWithStrictMode,
      })
    } catch (error) {
      throw new Error(error as string)
    }
  }

  return (
    response.totalPageCnt > 1 && (
      <div className='flex items-center gap-2'>
        <button
          className='inline-flex'
          onClick={async () => {
            await handleSpellCheck(currentPage - 1)
            push(createPageURL(currentPage - 1))
          }}
          disabled={currentPage === 1}
        >
          <i className='bg-icon-circle-arrow inline-flex size-6 bg-contain bg-center bg-no-repeat' />
        </button>
        <span className='flex items-center gap-1 text-base font-medium text-slate-400'>
          <span>{currentPage}</span>/<span>{response.totalPageCnt}</span>
        </span>
        <button
          className='inline-flex'
          onClick={async () => {
            await handleSpellCheck(currentPage + 1)
            push(createPageURL(currentPage + 1))
          }}
          disabled={currentPage === response.totalPageCnt}
        >
          <i className='bg-icon-circle-arrow inline-flex size-6 rotate-180 bg-contain bg-center bg-no-repeat' />
        </button>
      </div>
    )
  )
}

export { Navigator }
