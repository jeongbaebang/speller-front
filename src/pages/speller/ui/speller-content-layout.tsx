import { FC, PropsWithChildren } from 'react'

/**
 * 텍스트 입력 화면, 의견 보내기 화면에 대한 메인 컨텐츠 레이아웃을 구성하는 컴포넌트
 *
 * @description
 * - 메인 영역은 grid-rows-[auto_1fr_auto] 구조로, 자식 컴포넌트들이 다음 순서로 배치되어야 함:
 *   1. 상단(header): auto 높이
 *   2. 중앙(content): 남은 공간 차지
 *   3. 하단(footer): auto 높이
 */
const SpellerContentLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='grid h-full flex-1 shrink-0 grid-rows-[auto_1fr_auto] px-4 tab:px-[3.81rem] pc:px-0'>
      {children}
    </main>
  )
}

export default SpellerContentLayout
