'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/ui/button'
import { SpellerSetting } from '@/pages/speller/ui/speller-setting'

const TimeoutPage = () => {
  const router = useRouter()

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='w-full max-w-[22.5rem] pb-[0.5rem] pt-4 tab:max-w-[37.5rem] pc:flex pc:max-w-[65.625rem] pc:justify-end pc:pb-[1.25rem] pc:pt-[1.625rem]'>
        <SpellerSetting />
      </div>
      <div className='m-4 mb-12 mt-0 w-full max-w-[22.5rem] tab:h-[38.31rem] tab:max-w-[37.5rem] pc:flex pc:h-[40.25rem] pc:max-w-[65.625rem]'>
        <div className='relative h-[15.5rem] w-full overflow-hidden rounded-tl-lg rounded-tr-lg tab:h-[14.25rem] pc:h-[40.25rem] pc:w-[23.75rem] pc:rounded-bl-[1rem] pc:rounded-tl-[1rem] pc:rounded-tr-none'>
          <Image
            src='/timeout-mo.png'
            alt=''
            fill
            className='visible tab:invisible'
          />
          <Image
            src='/timeout-tab.png'
            alt=''
            fill
            className='invisible tab:visible'
          />
          <Image
            src='/timeout-pc.png'
            alt=''
            fill
            className='invisible pc:visible'
          />
        </div>
        <div className='rounded-bl-lg rounded-br-lg bg-white p-5 pt-7 tab:px-[6.25rem] pc:flex pc:h-[40.25rem] pc:flex-1 pc:flex-col pc:justify-center pc:rounded-bl-none pc:rounded-br-[1rem] pc:rounded-tr-[1rem] pc:px-[3.125rem]'>
          <div className='text-center pc:text-left'>
            <strong className='text-2xl font-semibold leading-9 tab:text-[2rem] pc:text-[3rem] pc:leading-[4.5rem]'>
              검사가 중단되었습니다.
            </strong>
            <p className='mt-2 inline-block text-base leading-6 tab:mt-3 tab:text-xl pc:mt-6 pc:text-left pc:text-2xl'>
              <span className='text-primary'>[ 검사 시간 초과 ]</span>
              <br />
              <br />
              너무 긴 문장을 입력했다면, 중간에 줄바꿈을 추가해
              <br /> 여러 문장으로 나누어 다시 시도 부탁드립니다.
              <br /> 혹시 짧은 문장인데도 해당 페이지가 나타났다면,
              <br /> 상단에 위치한 ‘문의하기’를 이용해 주세요.
            </p>
          </div>
          <div className='mt-7 flex justify-center gap-3 tab:mt-8 pc:mt-11 pc:justify-start'>
            <Button
              variant='outline'
              className='h-14 w-32 border-2 border-[#3046EC] bg-white text-lg text-[#3046EC] hover:text-[#3046EC] pc:h-16 pc:w-[9.5rem] pc:text-[1.375rem]'
              onClick={() => router.back()}
            >
              이전 페이지
            </Button>
            <Button
              className='h-14 w-32 text-lg font-semibold pc:h-16 pc:w-[9.5rem] pc:text-[1.375rem]'
              onClick={() => router.push('/')}
            >
              처음 페이지
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TimeoutPage }
