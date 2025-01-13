import { useSendReport } from '@/pages/results/api/use-send-report'
import { BasicTextarea } from '@/shared/ui/basic-textarea'
import { Button } from '@/shared/ui/button'
import { ChangeEvent, useState } from 'react'

// TODO: redux로 변경
const dummy = {
  strTitle: '맞춤법 검사 오류 보고',
  inputStr: '나는 어제 도서관에서 책을 잃어버렷다.',
  errorWord: '잃어버렷다',
  replaceWord: '잃어버렸다<br>잃어버렸습니다',
  comment:
    "단어 '잃어버렷다'가 잘못된 맞춤법으로 표시되었습니다. '잃어버렸다'가 올바른 표현입니다.",
}

interface ReportFormContentProps {
  handleClose: () => void
}

export const ReportFormContent = ({ handleClose }: ReportFormContentProps) => {
  const { sendReport } = useSendReport()

  const [value, setValue] = useState('')

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(value)
  }

  const handleSubmit = async () => {
    try {
      await sendReport(dummy)
      handleClose()
    } catch (err) {
      alert('문제가 발생했습니다. 잠시 후 다시 시도하세요.')
      console.error(err)
    }
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
        onClick={handleSubmit}
      >
        제출하기
      </Button>
    </>
  )
}
