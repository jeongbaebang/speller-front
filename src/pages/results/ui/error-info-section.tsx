'use client'

import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { BulletBadge } from '@/shared/ui/bullet-badge'
import EditIcon from '@/shared/ui/icon/icon-edit.svg'
import SendIcon from '@/shared/ui/icon/icon-send-gray.svg'
import ArrowBottomIcon from '@/shared/ui/icon/icon-arrow-bottom.svg'
import { cn } from '@/shared/lib/tailwind-merge'
import { CustomTextEditor } from './custom-text-editor'
import { ReportForm } from './report-form'

const ErrorInfoSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='my-[1.125rem]'>
      <dl className='grid grid-cols-[3.5rem_1fr] gap-2 tab:grid-cols-[4.5rem_1fr] pc:gap-[4px]'>
        <dt className='py-0.5 text-sm font-semibold tab:text-lg'>입력 내용</dt>
        <dd className='flex items-center justify-between'>
          <p className='flex items-center gap-2 text-base font-semibold tab:gap-3.5 tab:text-xl pc:text-[20px]'>
            <BulletBadge className='mx-1.5 h-3 w-3 bg-green-100 tab:mx-2.5' />
            이들 요소들을
          </p>
          <ReportForm>
            <Button
              variant='ghost'
              className='h-auto p-0 hover:bg-transparent pc:gap-[8px]'
            >
              <SendIcon className='!h-6 !w-6 tab:!h-8 tab:!w-8' />
              <span className='sr-only font-medium text-slate-500 tab:not-sr-only pc:text-lg'>
                오류 제보
              </span>
            </Button>
          </ReportForm>
        </dd>
        <dt className='py-0.5 text-sm font-semibold tab:text-lg'>대치어</dt>
        <dd>
          <CustomTextEditor wrongWord='이들 요소들을'>
            <div className='flex items-center justify-between'>
              <Button
                variant='ghost'
                className='h-auto p-0 text-base font-medium text-slate-500 hover:bg-transparent tab:gap-4 tab:text-lg pc:gap-[16px]'
              >
                <EditIcon className='!h-6 !w-6 tab:!h-8 tab:!w-8' />
                대치어 직접 수정하기
              </Button>
            </div>
          </CustomTextEditor>
          <div className='mt-3 flex max-h-[5.625rem] flex-col overflow-y-auto rounded-lg border border-slate-200 bg-slate-100 p-2 tab:mt-3 tab:max-h-[6.5rem] pc:mt-[12px]'>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-base font-medium tab:text-lg'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-base font-medium tab:text-lg'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-base font-medium tab:text-lg'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-base font-medium tab:text-lg'
            >
              이들 요소를
            </Button>
          </div>
        </dd>
        <dt className='py-0.5 text-sm font-semibold tab:mt-2 tab:text-lg pc:mt-[4px]'>
          도움말
        </dt>
        <dd>
          <div
            className={cn(
              'relative max-h-[4.5rem] overflow-hidden transition-[max-height,padding-bottom] duration-300 tab:mt-2 tab:max-h-14 pc:mt-[8px] pc:max-h-[48px]',
              isExpanded && '!max-h-full pb-6 tab:pb-7 pc:pb-[24px]',
            )}
          >
            <p className='text-base tab:text-lg'>
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
              className={cn(
                'absolute bottom-0 right-0 h-6 gap-1 rounded-none bg-white p-0 text-sm font-normal text-slate-600 underline before:absolute before:bottom-0 before:right-[100%] before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-white before:content-[""] tab:h-7 tab:text-base pc:h-auto',
                isExpanded && '!text-slate-400',
              )}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '접기' : '자세히 보기'}
              <ArrowBottomIcon
                className={cn('!size-6', isExpanded ? 'rotate-180' : '')}
              />
            </Button>
          </div>
        </dd>
      </dl>
    </div>
  )
}

export { ErrorInfoSection }
