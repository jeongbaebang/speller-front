import { FC, PropsWithChildren } from 'react'

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='grid h-full flex-1 shrink-0 grid-rows-[auto_1fr] gap-10 px-4 py-6 tab:px-[3.75rem] pc:px-0'>
      {children}
    </main>
  )
}

export { ContentLayout }
