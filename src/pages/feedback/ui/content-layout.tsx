import { FC, PropsWithChildren } from 'react'

import { cn } from '@/shared/lib/tailwind-merge'

interface ContentLayoutProps extends PropsWithChildren {
  className?: React.HTMLAttributes<HTMLElement>['className']
}

const ContentLayout: FC<ContentLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'grid h-full flex-1 shrink-0 grid-rows-[auto_1fr] px-4 tab:px-[3.75rem] pc:px-0',
        className,
      )}
    >
      {children}
    </main>
  )
}

export { ContentLayout }
