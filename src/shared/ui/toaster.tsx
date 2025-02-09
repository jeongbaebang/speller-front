'use client'

import { useToast } from '@/shared/lib/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/shared/ui/toast'
import WarningIcon from '@/shared/ui/icon/warning.svg'

export enum ToastType {
  SERVER_ERROR,
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection='up' duration={300000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {props.toastType === ToastType.SERVER_ERROR && (
                <ToastDescription>
                  <div className='flex gap-[1.03rem]'>
                    <WarningIcon />
                    <p>
                      서버 처리 중 오류가 발생했습니다. <br />
                      잠시 후 다시 시도해 주세요.
                    </p>
                  </div>
                </ToastDescription>
              )}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
