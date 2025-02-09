import { useAppSelector } from '@/shared/lib/use-redux'
import { ChangeEvent, useState } from 'react'
import { getWordsAroundIndex } from '@/shared/lib/util'
import { sendReportAction } from '../api/send-report-action'
import { toast } from '@/shared/lib/use-toast'

interface useSendReportParams {
  handleClose: () => void
}

export const useSendReport = ({ handleClose }: useSendReportParams) => {
  const {
    response: { errInfo, str },
    selectedErrIdx,
  } = useAppSelector(state => state.speller)

  const { orgStr, candWord, start } = errInfo[selectedErrIdx]

  const [comment, setComment] = useState('')

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(value)
  }

  const handleSubmit = async () => {
    try {
      await sendReportAction({
        strTitle: comment,
        inputStr: getWordsAroundIndex(str, start),
        errorWord: orgStr,
        replaceWord: candWord.replaceAll('|', '<br>'),
        comment,
      })
      handleClose()
    } catch (err) {
      toast({
        variant: 'destructive',
        description:
          '서버 처리 중 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요.',
      })
      console.error(err)
    }
  }

  return { comment, handleChange, handleSubmit }
}
