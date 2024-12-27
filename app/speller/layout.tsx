import Footer from '@/shared/ui/footer/footer'
import Header from '@/shared/ui/header/header'

const SpellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto] bg-background'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default SpellerLayout
