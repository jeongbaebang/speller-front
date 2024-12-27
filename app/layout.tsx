import '../src/app/styles/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../src/app/font/pretendard-variable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: '한국어 맞춤법/문법 검사기',
  description:
    '한국어 맞춤법과 문법을 자동으로 검사하고 교정해주는 무료 온라인 도구입니다. 띄어쓰기, 맞춤법, 문장 구조를 분석하여 정확하고 자연스러운 한국어 작성을 도와드립니다.',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='kr' className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
