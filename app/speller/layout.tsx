import MainAd from '@/shared/ui/ads/main-ad'
import Footer from '@/shared/ui/footer/footer'
import Header from '@/shared/ui/header/header'

const SpellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto] bg-background'>
      <Header />
      <div className='flex bg-background pc:container pc:mx-auto pc:gap-[1.09rem] pc:px-[3.75rem]'>
        {children}
        {/* 광고 영역 */}
        <MainAd />
      </div>
      <Footer />
    </div>
  )
}

export default SpellerLayout
