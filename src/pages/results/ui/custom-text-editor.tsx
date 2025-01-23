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
import { CustomTextEditorContent } from './custom-text-editor-content'

interface CustomTextEditorProps {
  children: ReactNode
}

export const CustomTextEditor = ({ children }: CustomTextEditorProps) => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [isDialogOpen, setDialogOpen] = useState(false)

  const handlePopoverClose = () => setPopoverOpen(false)
  const handleDialogClose = () => setDialogOpen(false)

  return (
    <>
      {/* pc */}
      <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild className='hidden pc:block'>
          {children}
        </PopoverTrigger>
        <PopoverContent
          className='w-[18.0625rem] rounded-2xl p-[1.12rem]'
          sideOffset={0}
        >
          <div className='grid gap-4'>
            <div className='flex items-center justify-between'>
              <CustomTextEditorTitle />
              <Button
                variant='ghost'
                className='h-[1.0625rem] w-[1.0625rem] bg-close bg-contain bg-no-repeat p-0 hover:bg-transparent'
                onClick={handlePopoverClose}
              ></Button>
            </div>
            <CustomTextEditorContent handleClose={handlePopoverClose} />
          </div>
        </PopoverContent>
      </Popover>
      {/* mobile,tab */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild className='pc:hidden'>
          {children}
        </DialogTrigger>
        <DialogContent className='w-[22.5625rem] rounded-2xl bg-white'>
          <DialogHeader>
            <DialogTitle>
              <VisuallyHidden>대치어 직접 수정하기</VisuallyHidden>
            </DialogTitle>
            <CustomTextEditorTitle />
          </DialogHeader>
          <CustomTextEditorContent handleClose={handleDialogClose} />
        </DialogContent>
      </Dialog>
    </>
  )
}

const CustomTextEditorTitle = () => {
  return (
    <h4 className='flex items-center gap-3 text-[1.75rem] font-bold text-slate-600 pc:gap-[0.62rem] pc:text-[1.04167rem]'>
      <span className='h-7 w-7 bg-icon-pencil bg-contain bg-no-repeat pc:h-[1.14583rem] pc:w-[1.14583rem]'></span>
      대치어 직접 수정하기
    </h4>
  )
}
