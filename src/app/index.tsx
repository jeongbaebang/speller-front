import 'overlayscrollbars/overlayscrollbars.css'
import './styles/globals.css'

import localFont from 'next/font/local'
import { GoogleAdSenseScript } from '@/entities/google-ad-sense'

const pretendard = localFont({
  src: './font/pretendard-variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='kr' className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} antialiased`}>{children}</body>
      <GoogleAdSenseScript />
    </html>
  )
}

export { App }
