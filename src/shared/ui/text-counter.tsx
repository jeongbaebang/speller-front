import { FC } from 'react'

interface TextCounterProps {
  count: number
}

const TextCounter: FC<TextCounterProps> = ({ count }) => {
  return (
    <p className='self-end text-[0.875rem] font-medium leading-[1.75rem] tracking-[-0.0175rem] text-slate-300 pc:text-[1.125rem] pc:leading-[1.75rem] pc:tracking-[-0.0225rem]'>
      {count}자
    </p>
  )
}

export { TextCounter }
