import { FC, PropsWithChildren } from 'react'

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='flex h-full w-full bg-[pink] px-4 py-6'>{children}</main>
  )
}

export { ContentLayout }
