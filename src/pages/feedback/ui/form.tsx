'use client'

import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { TextCounter } from '@/shared/ui/text-counter'
import { Textarea } from '@/shared/ui/textarea'

const Form = () => {
  return (
    <form className='flex grid-cols-1 flex-col tab:block'>
      {/* 이메일 */}
      <div className='flex flex-col gap-3 pc:grid pc:grid-cols-[9.25rem_1fr] pc:gap-0'>
        <FormLabel htmlFor='email' label='이메일 주소' />
        <Input
          type='email'
          id='email'
          placeholder='이메일을 입력해 주세요.'
          className='h-[3.25rem] rounded-lg bg-white px-5 py-4 text-lg leading-[150%] tracking-[-0.0225rem] text-slate-600 placeholder:text-slate-300 pc:h-[4.125rem] pc:text-xl pc:leading-[160%] pc:tracking-[-0.025rem]'
        />
      </div>
      {/* 문의 내용 */}
      <div className='mt-2 flex flex-1 flex-col gap-3 pc:mt-[1.125rem] pc:grid pc:grid-cols-[9.25rem_1fr] pc:gap-0'>
        <FormLabel htmlFor='description' label='문의 내용' />
        <div
          className='flex h-full min-h-[13.75rem] w-full flex-col rounded-lg bg-white px-5 py-4 tab:max-h-52 pc:min-h-[21.25rem]'
          id='description'
        >
          <Textarea
            value={
              '검사기를 사용할 때 교정 문서에서 대치어를 어떻게 변경하는 건지 잘 모르겠습니다.'
            }
            onChange={() => {}}
            placeholder='내용을 입력해 주세요.'
            className='text-slate-600 pc:text-xl pc:leading-[160%] pc:tracking-[-0.025rem]'
          />
          <input type='hidden' name='text' value={'text'} />
          <TextCounter count={12} className='self-start' />
        </div>
      </div>
      {/* 폼 전송 버튼 */}
      <div className='mt-3 text-end tab:mt-4'>
        <Button className='w-full tab:w-32 pc:h-16 pc:w-[9.625rem]'>
          전송하기
        </Button>
      </div>
    </form>
  )
}

const FormLabel = ({ label, htmlFor }: { label: string; htmlFor: string }) => {
  return (
    <Label
      htmlFor={htmlFor}
      className='text-lg font-semibold leading-[138%] tracking-[-0.0225rem] text-slate-600 after:ml-0.5 after:text-blue-500 after:content-["*"] pc:text-2xl pc:tracking-[-0.03rem]'
    >
      {label}
    </Label>
  )
}

export { Form }
