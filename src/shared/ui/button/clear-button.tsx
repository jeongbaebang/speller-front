import Image from 'next/image'
import { FC, memo } from 'react'

interface ClearButtonProps {
  onClear: () => void
}

const ClearButton: FC<ClearButtonProps> = ({ onClear }) => {
  return (
    <div
      className='relative size-4 cursor-pointer self-center tab:size-5'
      onClick={onClear}
    >
      <Image className='object-cover' src='/close.svg' alt='close logo' fill />
    </div>
  )
}

export default memo(ClearButton)
