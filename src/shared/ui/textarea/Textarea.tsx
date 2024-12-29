'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { useOverlayScrollbars } from 'overlayscrollbars-react'

interface TextareaProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
  onScroll?: (isScrolling: boolean) => void
}

const Textarea: FC<TextareaProps> = ({
  onChange,
  value,
  placeholder,
  onScroll,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isClient, setIsClient] = useState(false)
  // 스크롤바를 적용할 최상위 div 요소 참조
  const divRef = useRef<HTMLDivElement>(null)
  // 실제 편집 가능한 텍스트 영역 요소 참조
  const contentEditableRef = useRef<HTMLDivElement>(null)
  // 마지막으로 업데이트된 값을 저장 (불필요한 리렌더링 방지)
  const lastValueRef = useRef(value)
  // 스크롤 이벤트 디바운싱을 위한 타이머 참조
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  const [initialize] = useOverlayScrollbars({
    options: {
      paddingAbsolute: true,
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'never',
        // 포커스 상태에 따라 스크롤바 표시/숨김
        visibility: isFocused ? 'visible' : 'hidden',
        dragScroll: true,
      },

      overflow: {
        x: 'hidden',
        y: 'scroll',
      },
    },
    events: {
      // 스크롤 이벤트 핸들링 (디바운싱 적용)
      scroll: () => {
        onScroll?.(true)
        clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = setTimeout(() => {
          onScroll?.(false)
        }, 500)
      },
    },
    defer: true,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    if (divRef.current) {
      initialize(divRef.current)
    }

    if (contentEditableRef.current) {
      contentEditableRef.current.innerHTML = value
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient])

  // value prop이 외부에서 변경될 때 동기화
  useEffect(() => {
    if (
      contentEditableRef.current &&
      value !== lastValueRef.current &&
      isClient
    ) {
      contentEditableRef.current.innerHTML = value
      lastValueRef.current = value
    }
  }, [value, isClient])

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const text = event.currentTarget.textContent || ''
    lastValueRef.current = text
    onChange(text)

    // 빈 텍스트일 때 <br> 태그 제거
    if (!text && event.currentTarget.innerHTML === '<br>') {
      event.currentTarget.innerHTML = ''
    }
  }

  // 포커스 해제 시 처리
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    setIsFocused(false)

    // 빈 텍스트일 때 정리
    if (
      !event.currentTarget.textContent &&
      event.currentTarget.innerHTML === '<br>'
    ) {
      event.currentTarget.innerHTML = ''
      lastValueRef.current = ''
      onChange('')
    }
  }

  return (
    <div
      data-overlayscrollbars-initialize
      suppressHydrationWarning
      suppressContentEditableWarning
      className='mr-[-1.25rem] h-full min-h-40 flex-1 resize-none overflow-y-auto pr-[1.25rem] outline-none'
      ref={divRef}
    >
      <div
        ref={contentEditableRef}
        data-placeholder={placeholder}
        className='h-0 min-h-full w-full whitespace-pre-wrap break-words text-justify text-[1.125rem] font-normal leading-[1.6875rem] tracking-[-0.0225rem] text-slate-600 outline-none empty:before:text-slate-300 empty:before:content-[attr(data-placeholder)] tab:leading-[1.9125rem]'
        contentEditable
        suppressContentEditableWarning
        suppressHydrationWarning
        onFocus={() => setIsFocused(true)}
        onInput={handleInput}
        onBlur={handleBlur}
      />
    </div>
  )
}
Textarea.displayName = 'Textarea'

export { Textarea }
