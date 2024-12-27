import { ComponentType, FC, PropsWithChildren } from 'react'

interface SpellerLayoutProps {
  AdComponent: ComponentType
}

/**
 * 맞춤법 검사 페이지의 레이아웃을 구성하는 컴포넌트
 *
 * @description
 * - 메인 콘텐츠 영역과 광고 영역으로 구성된 2단 레이아웃
 * - 메인 영역은 grid-rows-[auto_1fr_auto] 구조로, 자식 컴포넌트들이 다음 순서로 배치되어야 함:
 *   1. 상단(header): auto 높이
 *   2. 중앙(content): 남은 공간 차지
 *   3. 하단(footer): auto 높이
 */
const SpellerLayout: FC<PropsWithChildren<SpellerLayoutProps>> = ({
  AdComponent,
  children,
}) => {
  return (
    <div className='flex bg-background pc:container pc:mx-auto pc:gap-[1.09rem] pc:px-[3.75rem]'>
      <main className='grid h-full flex-1 shrink-0 grid-rows-[auto_1fr_auto] px-4 tab:px-[3.75rem] pc:px-0'>
        {children}
      </main>
      {/* 광고 영역 */}
      <AdComponent />
    </div>
  )
}

export default SpellerLayout
