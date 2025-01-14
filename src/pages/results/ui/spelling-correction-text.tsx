import { CheckResponse } from '@/entities/speller'

interface CorrectionProps {
  text: string
  corrections: CheckResponse['errInfo']
}

const SpellingCorrectionText: React.FC<CorrectionProps> = ({
  text,
  corrections,
}) => {
  let lastIndex = 0 // useRef 대신 일반 변수 사용 - 매 렌더링마다 초기화 필요
  const parts: React.ReactNode[] = []

  corrections.forEach((pos, idx) => {
    // 현재 교정 위치 이전의 일반 텍스트 처리
    if (pos.start > lastIndex) {
      parts.push(
        <span key={`text-${idx}`}>{text.slice(lastIndex, pos.start)}</span>,
      )
    }

    // 교정이 필요한 텍스트 처리
    // 상단에 추천 단어를 표시하고 원본 텍스트에 밑줄 표시
    parts.push(
      <span key={`correction-${idx}`} className='relative inline-block'>
        <div className='h-8'>
          <span className='absolute bottom-7 left-0 min-w-fit whitespace-nowrap text-[0.875rem] text-sm font-bold leading-[1.4875rem] tracking-[-0.0175rem] text-slate-600'>
            {/* 첫 번째 추천 교정 단어 */}
            {pos.candWord.split('|')[0]}
          </span>
        </div>
        <span className='text-[1.125rem] font-bold leading-[1.9125rem] tracking-[-0.0225rem] text-green-100 underline decoration-[2px] underline-offset-[25%]'>
          {text.slice(pos.start, pos.end)}
        </span>
      </span>,
    )

    lastIndex = pos.end
  })

  // 마지막 교정 위치 이후의 남은 텍스트 처리
  if (lastIndex < text.length) {
    parts.push(<span key='final'>{text.slice(lastIndex)}</span>)
  }

  return (
    <div className='h-0 w-full break-all text-[1.125rem] leading-[1.6875rem] tracking-[-0.0225rem] [text-justify:distribute] tab:leading-[1.9125rem] tab:tracking-[-0.03375rem]'>
      {parts}
    </div>
  )
}

export { SpellingCorrectionText }
