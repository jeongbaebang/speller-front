'use client'

import { useSpeller } from '@/entities/speller'

const StrongCheckMessage = () => {
  const {
    response: { requestedWithStrictMode },
  } = useSpeller()

  return (
    <div className='mb-2 mt-[1.13rem] flex items-center justify-end gap-2 text-right text-[0.9375rem] font-medium leading-[1.40625rem] tracking-[-0.01875rem] text-slate-300 tab:mb-[1.38rem] tab:mt-[1.75rem]'>
      {requestedWithStrictMode
        ? '강한 검사가 적용되었습니다.'
        : '강한 검사가 적용되지 않았습니다.'}
    </div>
  )
}

export { StrongCheckMessage }
