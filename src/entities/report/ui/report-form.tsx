'use client'

import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import React, { ReactNode, useState } from 'react'
import { ReportFormContent } from './report-form-content'

interface ReportFormProps {
  children: ReactNode
}

export const ReportForm = ({ children }: ReportFormProps) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [isDialogOpen, setDialogOpen] = useState(false)

  const handlePopoverClose = () => setPopoverOpen(false)
  const handleDialogClose = () => setDialogOpen(false)

  const reportFormContent = (handleClose: () => void) => (
    <ReportFormContent handleClose={handleClose} />
  )

  return (
    <>
      {/* pc */}
      <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild className='hidden pc:inline-flex'>
          {children}
        </PopoverTrigger>
        <PopoverContent
          className='w-[18.0625rem] rounded-2xl p-[0.78rem] pc:w-[15rem]'
          sideOffset={0}
        >
          <div className='grid gap-4'>
            <div className='flex items-center justify-between'>
              <ReportFormTitle />
              <Button
                variant='ghost'
                className='h-[1.0625rem] w-[1.0625rem] bg-close bg-contain bg-no-repeat p-0 hover:bg-transparent'
                onClick={handlePopoverClose}
              ></Button>
            </div>
            {reportFormContent(handlePopoverClose)}
          </div>
        </PopoverContent>
      </Popover>
      {/* mobile,tab */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild className='pc:hidden'>
          {children}
        </DialogTrigger>
        <DialogContent className='w-[22.5625rem] rounded-2xl bg-white px-4'>
          <DialogHeader>
            <DialogTitle>
              <VisuallyHidden>제보 작성하기</VisuallyHidden>
            </DialogTitle>
            <ReportFormTitle />
          </DialogHeader>
          {reportFormContent(handleDialogClose)}
        </DialogContent>
      </Dialog>
    </>
  )
}

const ReportFormTitle = () => {
  return (
    <h4 className='flex items-center gap-3 text-[1.75rem] font-bold text-slate-600 pc:gap-[0.62rem] pc:text-[1.04167rem]'>
      <span className='h-7 w-7 bg-icon-send bg-contain bg-no-repeat pc:h-[1.14583rem] pc:w-[1.14583rem]'></span>
      제보 작성하기
    </h4>
  )
}
