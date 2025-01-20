'use client'

import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { BulletBadge } from '@/shared/ui/bullet-badge'
import EditIcon from '@/shared/ui/icon/icon-edit.svg'
import SendIcon from '@/shared/ui/icon/icon-send-gray.svg'
import ArrowBottomIcon from '@/shared/ui/icon/icon-arrow-bottom.svg'
import { cn } from '@/shared/lib/tailwind-merge'
import { CustomTextEditor } from './custom-text-editor'
import { useAppDispatch } from '@/shared/lib/use-redux'
import { ReportForm } from '@/entities/report'
import { setSelectedErrIdx } from '@/entities/speller'

const errInfoIdx = 0 // TODO: props or store

const ErrorInfoSection = () => {
  const dispatch = useAppDispatch()

  const [isExpanded, setIsExpanded] = useState(false)

  const updateErrInfoIndex = () => {
    dispatch(setSelectedErrIdx(errInfoIdx))
  }

  return (
    <div className='my-[1.125rem]'>
      <dl className='grid grid-cols-[3.5rem_1fr] gap-3 tab:grid-cols-[4.75rem_1fr] pc:grid-cols-[72px_1fr] pc:gap-[4px]'>
        <dt className='py-0.5 text-[0.875rem] font-[600] tab:text-[1.125rem] pc:text-[18px]'>
          입력 내용
        </dt>
        <dd className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-[1rem] font-[600] tab:gap-3.5 tab:text-[1.25rem] pc:text-[20px]'>
            <BulletBadge className='mx-1.5 h-3 w-3 bg-green-100 tab:mx-2.5' />
            이들 요소들을
          </p>
          <ReportForm>
            <Button
              variant='ghost'
              className='h-auto p-0 hover:bg-transparent pc:gap-[8px]'
              onClick={updateErrInfoIndex}
            >
              <SendIcon className='!h-6 !w-6 tab:!h-8 tab:!w-8' />
              <span className='sr-only font-medium text-slate-500 tab:not-sr-only pc:text-[18px]'>
                오류 제보
              </span>
            </Button>
          </ReportForm>
        </dd>
        <dt className='py-0.5 text-[0.875rem] font-[600] tab:text-[1.125rem] pc:text-[18px]'>
          대치어
        </dt>
        <dd>
          <CustomTextEditor>
            <div className='flex items-center justify-between'>
              <Button
                variant='ghost'
                className='h-auto p-0 text-[1rem] font-medium text-slate-500 hover:bg-transparent tab:gap-4 tab:text-[1.125rem] pc:gap-[16px] pc:text-[18px]'
                onClick={updateErrInfoIndex}
              >
                <EditIcon className='!h-6 !w-6 tab:!h-8 tab:!w-8' />
                대치어 직접 수정하기
              </Button>
            </div>
          </CustomTextEditor>
          <div className='mt-2 flex max-h-[5.625rem] flex-col overflow-y-auto rounded-lg border border-slate-200 bg-slate-100 p-2 tab:mt-4 tab:max-h-[6rem] pc:mt-[12px]'>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[1rem] font-[500] tab:text-[1rem] pc:text-[18px]'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[1rem] font-[500] tab:text-[1rem] pc:text-[18px]'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[1rem] font-[500] tab:text-[1rem] pc:text-[18px]'
            >
              이들 요소를
            </Button>
          </div>
        </dd>
        <dt className='py-0.5 text-[0.875rem] font-[600] tab:text-[1.125rem] pc:mt-[4px] pc:text-[18px]'>
          도움말
        </dt>
        <dd>
          <div
            className={cn(
              'relative max-h-[4.5rem] overflow-hidden transition-[max-height,padding-bottom] duration-300 tab:max-h-[3.5rem] pc:mt-[8px] pc:max-h-[48px]',
              isExpanded &&
                '!max-h-full pb-[1.5rem] tab:pb-[1.75rem] pc:pb-[24px]',
            )}
          >
            <p className='text-[1rem] tab:text-[1.125rem] pc:text-[16px]'>
              최근 우리말에 접미사 &apos;들&apos;을 원칙이 없이 사용하는 예가
              매우 흔합니다. 이는 영어의 영향이 크므로 가려서 쓰는 것이
              바람직합니다. 특히, 우리말에는 &apos;들&apos;이 붙으면 복수의
              의미보다는 빈정거림의 뜻으로 쓰이는 예가 많습니다. 따라서
              &apos;들&apos;의 사용을 자제하심이 바람직합니다. [문화일보, 1996년
              2월 28일,7면, &apos;국어 교육 바로 세우기&apos;] 바람직합니다.
              [문화일보, 1996년 2월 28일,7면, &apos;국어 교육 바로 세우기&apos;]
              처리들을 (X) → 처리를생각들을 (X) → 생각을역사들 (X) → 역사
            </p>
            <Button
              variant={null}
              className='absolute bottom-0 right-0 h-6 gap-1 rounded-none bg-white p-0 text-[0.875rem] font-[400] text-slate-600 underline before:absolute before:bottom-0 before:right-[100%] before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-white before:content-[""] tab:h-7 tab:text-[1rem] pc:h-auto pc:text-[16px]'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '접기' : '자세히 보기'}
              <ArrowBottomIcon
                className={cn('!h-4 !w-4', isExpanded ? 'rotate-180' : '')}
              />
            </Button>
          </div>
        </dd>
      </dl>
    </div>
  )
}

export { ErrorInfoSection }
