'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { BulletBadge } from '@/shared/ui/bullet-badge'
import { cn } from '@/shared/lib/tailwind-merge'

const ErrorInfoSection = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='my-[1.125rem]'>
      <dl className='grid grid-cols-[3.5rem_1fr] gap-3'>
        <dt className='py-0.5 text-[0.875rem] font-[600]'>입력 내용</dt>
        <dd>
          <p className='flex items-center gap-3 text-[1rem] font-[600]'>
            <BulletBadge className='h-3 w-3 bg-green-100' />
            이들 요소들을
          </p>
        </dd>
        <dt className='py-0.5 text-[0.875rem] font-[600]'>대치어</dt>
        <dd>
          <div>
            <Button
              variant='ghost'
              className='h-auto p-0 text-[0.875rem] text-slate-500'
            >
              <Image
                src='/images/icon-edit.svg'
                alt='edit icon'
                width={22}
                height={22}
              />
              대치어 직접 수정하기
            </Button>
            <Button variant='ghost' className='h-auto p-0'>
              <span className='sr-only'>오류 제보</span>
            </Button>
          </div>
          <div className='flex max-h-[5.5rem] flex-col overflow-y-auto rounded-lg border border-slate-200 bg-slate-100 p-2'>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[0.875rem] font-[500]'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[0.875rem] font-[500]'
            >
              이들 요소를
            </Button>
            <Button
              variant={null}
              className='h-auto justify-start p-0 text-[0.875rem] font-[500]'
            >
              이들 요소를
            </Button>
          </div>
        </dd>
        <dt className='py-0.5 text-[0.875rem] font-[600]'>도움말</dt>
        <dd>
          <div
            className={cn(
              'transition-max-height relative max-h-[4rem] overflow-hidden duration-300',
              isExpanded && 'max-h-full pb-[1.25rem]',
            )}
          >
            <p className='text-[0.875rem]'>
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
              className='absolute bottom-0 right-0 h-auto gap-1 bg-white p-0 text-[0.875rem] font-[400] text-slate-600 underline before:absolute before:bottom-0 before:right-[100%] before:h-full before:w-full before:bg-gradient-to-r before:from-transparent before:to-white before:content-[""]'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '접기' : '자세히 보기'}
              <Image
                src='/images/arrow-bottom.svg'
                alt='bottom arrow'
                width={17}
                height={17}
                className={isExpanded ? 'rotate-180' : ''}
              />
            </Button>
          </div>
        </dd>
      </dl>
    </div>
  )
}

export { ErrorInfoSection }
