import { FC, memo } from 'react'

import { Label } from '@/shared/ui/label/label'
import { Switch } from '@/shared/ui/switch/switch'

interface SpellerHeaderProps {
  isStrongCheck: boolean
  onCheckChange: (checked: boolean) => void
}

const SpellerHeader: FC<SpellerHeaderProps> = ({
  isStrongCheck,
  onCheckChange,
}) => {
  return (
    <div className='mb-2 mt-[1.13rem] flex items-center justify-end gap-2 tab:mb-[1.38rem] tab:mt-[1.75rem]'>
      <Label
        htmlFor='airplane-mode'
        className='self-center text-[0.9375rem] font-medium tracking-[-0.01875rem] text-slate-600'
      >
        강한 검사
      </Label>
      <Switch
        id='airplane-mode'
        checked={isStrongCheck}
        onCheckedChange={onCheckChange}
      />
    </div>
  )
}

export default memo(SpellerHeader, (prev, next) => {
  return prev.isStrongCheck === next.isStrongCheck
})
