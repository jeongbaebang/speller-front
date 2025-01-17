import { FC, PropsWithChildren } from 'react'

import { Header } from './header'
import { MainAd } from './main-ad'
import { Footer } from './footer'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto] bg-background'>
      <Header />
      <div className='flex bg-background pc:container pc:mx-auto pc:gap-[1.09rem] pc:px-[3.81rem]'>
        {/* 레이아웃 쉬프트 방지 */}
        <div className='flex h-full flex-1'>{children}</div>
        {/* 광고 영역 */}
        <MainAd />
      </div>
      <Footer />
    </div>
  )
}

export { BaseLayout }
