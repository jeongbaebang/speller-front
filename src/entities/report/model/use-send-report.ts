import { useAppSelector } from '@/shared/lib/use-redux'
import { ChangeEvent, useState } from 'react'
import { getWordsAroundIndex } from '@/shared/lib/util'
import { sendReportAction } from '../api/send-report-action'

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
      alert('문제가 발생했습니다. 잠시 후 다시 시도하세요.')
      console.error(err)
    }
  }

  return { comment, handleChange, handleSubmit }
}
