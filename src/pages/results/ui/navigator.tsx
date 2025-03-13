'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useFlag } from '@/entities/flag'
import { useSpeller } from '@/entities/speller'
import { Spinner } from '@/shared/ui/spinner'
import { toast } from '@/shared/lib/use-toast'
import { clientSpellCheck } from '../api/client-spell-check'

const Navigator = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const {
    response,
    responseMap,
    handleReceiveResponse,
    updateResponseMap,
    initResponseMap,
  } = useSpeller()
  const { isSpellCheckExecuted } = useFlag()
  const [isInitResponseMap, setIsInitResponseMap] = useState(false)
  const [isUpdatedResponseMap, setIsUpdatedResponseMap] = useState(false)
  const currentPage = Number(searchParams?.get('page')) || 1

  const createPageURL = (nextPage: number) => {
    if (!searchParams) return `${pathname}`

    const params = new URLSearchParams(searchParams)
    params.set('page', nextPage.toString())
    return `${pathname}?${params.toString()}`
  }

  const handlePagination = (page: number) => {
    try {
      handleReceiveResponse({ ...responseMap[page] })
    } catch (error) {
      throw new Error(error as string)
    }
  }

  useEffect(() => {
    ;(async () => {
      const isEmptyResponseMap = !responseMap?.[currentPage]
      const isFetchedNextPage = !!responseMap?.[currentPage + 1]
      const isNotNextPage = !responseMap?.[currentPage]?.remaningText

      if (isEmptyResponseMap) {
        updateResponseMap({ ...response, pageIdx: currentPage })
      }

      if (!isInitResponseMap && isSpellCheckExecuted) {
        initResponseMap()
        setIsInitResponseMap(true)
        return
      }

      if ((isFetchedNextPage || isNotNextPage) && !isSpellCheckExecuted) {
        setIsUpdatedResponseMap(true)
        return
      }

      if (!isEmptyResponseMap && !isFetchedNextPage && !isNotNextPage) {
        const nextPageResponse = await clientSpellCheck({
          text: responseMap[currentPage].remaningText,
          isStrictCheck: responseMap[currentPage].requestedWithStrictMode,
          pageIdx: currentPage + 1,
        })
        updateResponseMap({
          ...nextPageResponse,
          requestedWithStrictMode:
            responseMap[currentPage].requestedWithStrictMode,
          pageIdx: currentPage + 1,
        })
        setIsUpdatedResponseMap(true)
      }
    })()
  }, [response, responseMap, currentPage])

  useEffect(() => {
    toast({
      description: `총 ${response.totalPageCnt} 페이지입니다.\n화살표를 눌러 페이지를 이동해 주세요.`,
      onlyMessage: true,
    })
  }, [isUpdatedResponseMap])

  return (
    response.totalPageCnt > 1 && (
      <div className='z-10 flex items-center gap-5 pc:gap-8'>
        <button
          className='inline-flex disabled:cursor-not-allowed disabled:opacity-50'
          onClick={() => {
            handlePagination(currentPage - 1)
            push(createPageURL(currentPage - 1))
          }}
          disabled={!isUpdatedResponseMap || currentPage === 1}
        >
          <i className='inline-flex size-6 bg-icon-circle-arrow bg-contain bg-center bg-no-repeat pc:size-[1.875rem]' />
        </button>
        <span className='flex items-center gap-1 text-base font-medium text-slate-400 pc:text-xl'>
          {isUpdatedResponseMap ? (
            <>
              <span className='text-slate-600'>{currentPage}</span>/
              <span>{response.totalPageCnt}</span>
            </>
          ) : (
            <Spinner />
          )}
        </span>
        <button
          className='inline-flex disabled:cursor-not-allowed disabled:opacity-50'
          onClick={() => {
            handlePagination(currentPage + 1)
            push(createPageURL(currentPage + 1))
          }}
          disabled={
            !isUpdatedResponseMap || currentPage === response.totalPageCnt
          }
        >
          <i className='inline-flex size-6 rotate-180 bg-icon-circle-arrow bg-contain bg-center bg-no-repeat pc:size-[1.875rem]' />
        </button>
      </div>
    )
  )
}

export { Navigator }
