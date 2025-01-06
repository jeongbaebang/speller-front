import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { ChangeEvent, useState } from 'react'

interface CustomTextEditorContent {
  wrongWord: string
}

export const CustomTextEditorContent = ({
  wrongWord,
}: CustomTextEditorContent) => {
  const [value, setValue] = useState('')

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-[0.38rem] pc:gap-[0.36rem]'>
        <p className='text-green-100 flex items-center justify-center gap-[0.44rem] text-lg pc:gap-[0.42rem] pc:text-[0.72917rem] pc:leading-normal'>
          <span className='bg-green-100 inline-block h-[11px] w-[11px] rounded-full'></span>
          {wrongWord}
        </p>
        <div className='bg-chevron-down h-[1.125rem] w-[1.125rem] bg-contain bg-center bg-no-repeat focus-visible:ring-0' />
      </div>
      <Input
        placeholder='직접 수정해 보세요!'
        className='w-full placeholder:text-slate-300 pc:h-[1.66667rem] pc:rounded-[0.20833rem] pc:px-[0.31rem] pc:py-[0.21rem] pc:text-[0.72917rem] pc:leading-[170%] pc:placeholder:text-[0.72917rem]'
        value={value}
        onChange={handleChange}
      />
      <Button
        disabled={!value}
        className='py-[0.88rem] pc:h-[2.08333rem] pc:rounded-[0.31rem] pc:py-[0.57rem] pc:text-[0.83333rem]'
      >
        수정하기
      </Button>
    </>
  )
}
