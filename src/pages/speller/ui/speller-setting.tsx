'use client'

import React, { memo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Label } from '@/shared/ui/label'
import { Switch } from '@/shared/ui/switch'

const QUERY = 'isStrictCheck'

const SpellerSetting = memo(() => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleChange = (checked: boolean) => {
    if (!searchParams) return

    const params = new URLSearchParams(searchParams)

    if (checked) {
      params.set(QUERY, 'true')
    } else {
      params.delete(QUERY)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='mb-2 mt-[0.94rem] flex items-center justify-end gap-2 tab:mt-[1.75rem] pc:mb-[0.78rem] pc:mt-[1.97rem] pc:gap-4'>
      <Label
        htmlFor='airplane-mode'
        className='self-center text-[0.9375rem] font-medium leading-[1.40625rem] tracking-[-0.01875rem] text-slate-600 pc:text-[1.25rem] pc:leading-[2rem] pc:tracking-[-0.025rem]'
      >
        강한 검사
      </Label>
      <Switch
        role='switch'
        aria-label='강한 검사 모드 켜기/끄기'
        id='airplane-mode'
        name='isStrictCheck'
        onCheckedChange={handleChange}
        defaultChecked={Boolean(searchParams?.get(QUERY)?.toString())}
      />
    </div>
  )
})

SpellerSetting.displayName = 'SpellerSetting'

export { SpellerSetting }
