import React, { FC } from 'react'

import { Button } from '@/shared/ui/button'
import { TextCounter } from '@/shared/ui/text-counter'

interface SpellerControlProps {
  count: number
}

const SpellerControl: FC<SpellerControlProps> = ({ count }) => {
  return (
    <div className='mt-2 flex flex-shrink-0 justify-between'>
      <TextCounter count={count} />
      <Button>검사하기</Button>
    </div>
  )
}

export { SpellerControl }
