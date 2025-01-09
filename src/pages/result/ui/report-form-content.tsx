import { BasicTextarea } from '@/shared/ui/basic-textarea'
import { Button } from '@/shared/ui/button'
import { ChangeEvent, useState } from 'react'

export const ReportFormContent = () => {
  const [value, setValue] = useState('')

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(value)
  }

  return (
    <>
      <p className='break-keep text-lg text-slate-500 pc:w-[12rem] pc:text-[0.72917rem] pc:leading-normal'>
        대치어가 맞지 않거나, 다른 의견이 있다면 문의하기를 이용해주세요.
      </p>
      <BasicTextarea
        placeholder='내용을 작성해주세요.'
        value={value}
        onChange={handleChange}
        className='min-h-[166px] resize-none rounded-[0.375rem] border-slate-200 bg-slate-100 p-4 leading-4 tracking-[-0.01458rem] text-slate-600 placeholder:text-slate-300 pc:min-h-[133px] pc:p-[0.68rem] pc:text-[0.72917rem] pc:leading-[0.875rem]'
      />
      <Button
        disabled={!value}
        className='py-[0.88rem] pc:h-[2.08333rem] pc:rounded-[0.31rem] pc:py-[0.57rem] pc:text-[0.83333rem]'
      >
        제출하기
      </Button>
    </>
  )
}
