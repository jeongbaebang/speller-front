import * as React from 'react'

import { cn } from '@/shared/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex h-full min-h-28 w-full resize-none bg-transparent text-[1.125rem] font-normal leading-[1.6875rem] tracking-[-0.0225rem] text-slate-600 ring-offset-background placeholder:font-normal placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 tab:leading-[1.9125rem]',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
