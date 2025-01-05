'use client'

import { Button } from '@/shared/ui/button'
import React from 'react'
import { CustomTextEditor } from './custom-text-editor'
import { ReportForm } from './report-form'

export const ResultPage = () => {
  return (
    <>
      <CustomTextEditor wrongWord='이들 요소들을'>
        <Button variant={'ghost'} size={'sm'}>
          대치어 직접 수정하기
        </Button>
      </CustomTextEditor>
      <ReportForm>
        <Button variant={'ghost'} size={'sm'}>
          오류 제보
        </Button>
      </ReportForm>
    </>
  )
}
