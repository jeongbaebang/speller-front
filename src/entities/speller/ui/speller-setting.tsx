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

  const updateStrictCheckQueryParams = (checked: boolean) => {
    if (!searchParams) return

    const params = new URLSearchParams(searchParams.toString())

    if (checked) {
      params.set(QUERY, 'true')
    } else {
      params.delete(QUERY)
    }

    return params.toString()
  }

  const handleCheckedChange = (checked: boolean) => {
    const newParams = updateStrictCheckQueryParams(checked)

    if (newParams !== undefined) {
      // replace(`${pathname}?${newParams}`, { scroll: false })
      window.history.pushState(null, '', `${pathname}?${newParams}`)
    }
  }

  const isStrictCheckEnabled = () => {
    if (!searchParams) return false

    return searchParams.get(QUERY) === 'true'
  }

  return (
    <div className='flex items-center justify-end gap-2 pc:gap-4'>
      <Label
        htmlFor='airplane-mode'
        className='self-center text-base font-medium leading-[1.40625rem] tracking-[-0.01875rem] text-slate-600 pc:text-xl pc:leading-[2rem] pc:tracking-[-0.025rem]'
      >
        강한 검사
      </Label>
      <Switch
        role='switch'
        aria-label='강한 검사 모드 켜기/끄기'
        id='airplane-mode'
        name='isStrictCheck'
        onCheckedChange={handleCheckedChange}
        checked={isStrictCheckEnabled()}
      />
    </div>
  )
})

SpellerSetting.displayName = 'SpellerSetting'

export { SpellerSetting }
