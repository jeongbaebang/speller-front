import { FC, PropsWithChildren } from 'react'

/**
 * 컨텐츠 레이아웃을 구성하는 컴포넌트
 *
 * @description
 * - 메인 영역은 grid-rows-[auto_1fr] 구조로, 자식 컴포넌트들이 다음 순서로 배치되어야 함:
 *   1. 상단(header): auto 높이
 *   2. 중앙(content): 남은 공간 차지
 */
const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='grid h-full flex-1 shrink-0 grid-rows-[auto_1fr] px-4 pb-8 tab:px-[3.81rem] tab:pb-[3.12rem] pc:px-0'>
      {children}
    </main>
  )
}

export { ContentLayout }
