'use client'

import { useSpeller } from '@/entities/speller'

const StrongCheckMessage = () => {
  const {
    response: { requestedWithStrictMode },
  } = useSpeller()

  return (
    <div className='mb-[0.44rem] mt-[1.12rem] flex items-center justify-end gap-2 text-right text-[1rem] font-medium leading-[150%] tracking-[-0.02rem] text-slate-300 tab:mb-[0.5rem] tab:mt-[1.94rem] pc:mb-[0.81rem] pc:mt-[2rem] pc:text-[1.25rem] pc:tracking-[-0.025rem]'>
      {requestedWithStrictMode
        ? '강한 검사가 적용되었습니다.'
        : '강한 검사가 적용되지 않았습니다.'}
    </div>
  )
}

export { StrongCheckMessage }
