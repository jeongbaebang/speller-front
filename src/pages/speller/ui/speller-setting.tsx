import React, { FC, memo } from 'react'

import { Label } from '@/shared/ui/label'
import { Switch } from '@/shared/ui/switch'

interface SpellerSettingProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

const SpellerSetting: FC<SpellerSettingProps> = memo(
  ({ checked, onCheckedChange }) => {
    return (
      <div className='mb-2 mt-[0.94rem] flex items-center justify-end gap-2 tab:mt-[1.75rem]'>
        <Label
          htmlFor='airplane-mode'
          className='self-center text-[0.9375rem] font-medium leading-[1.40625rem] tracking-[-0.01875rem] text-slate-600'
        >
          강한 검사
        </Label>
        <Switch
          role='switch'
          aria-checked={checked}
          aria-label='강한 검사 모드 켜기/끄기'
          id='airplane-mode'
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
        <input type='hidden' name='isStrictCheck' value={String(checked)} />
      </div>
    )
  },
  (prev, next) => {
    return prev.checked === next.checked
  },
)

SpellerSetting.displayName = 'SpellerSetting'

export { SpellerSetting }
