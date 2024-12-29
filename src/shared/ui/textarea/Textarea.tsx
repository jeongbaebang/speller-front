'use client'

import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { useOverlayScrollbars } from 'overlayscrollbars-react'
import { initCaretPositionPolyfill } from '@/shared/lib/caretPosition.polyfill'

if (typeof window !== 'undefined') {
  initCaretPositionPolyfill()
}

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

  // 공백 클릭 시 마지막 텍스트 포커스 처리되게 하는 로직
  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const element = contentEditableRef.current

    // 클릭된 위치의 정확한 노드 확인
    const range = document.caretPositionFromPoint?.(
      event.clientX,
      event.clientY,
    )

    if (!range || !element) return

    const isDivNode = range.offsetNode.nodeType === Node.ELEMENT_NODE

    if (isDivNode && element.textContent) {
      // 스크롤 이동 없이 포커스 설정
      element.focus({ preventScroll: true })

      // 현재 선택 영역 정보 가져오기
      const selection = window.getSelection()
      // 새로운 범위 객체 생성
      const newRange = document.createRange()
      // 마지막 텍스트 노드 선택
      const lastChild = element.lastChild || element

      // 해당 노드의 컨텐츠를 선택 범위로 지정
      newRange.selectNodeContents(lastChild)
      // 선택 범위를 끝점으로 접기 (커서를 끝으로 이동)
      newRange.collapse(false)
      // 기존 선택 영역 모두 제거
      selection?.removeAllRanges()
      // 새로운 선택 영역 추가 (커서 위치 설정)
      selection?.addRange(newRange)
    }

    setIsFocused(true)
  }, [])

  // 공백 클릭 시 드래그 가능하게 처리하는 로직
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!(event.buttons === 1)) return

      const element = contentEditableRef.current
      const range = document.caretPositionFromPoint?.(
        event.clientX,
        event.clientY,
      )

      if (!range || !element) return

      const isDivNode = range.offsetNode.nodeType === Node.ELEMENT_NODE

      if (isDivNode) {
        const selection = window.getSelection()
        const newRange = document.createRange()
        const lastChild = element.lastChild || element

        // 시작점 설정
        newRange.setStart(lastChild, 0)
        newRange.collapse(false)
        selection?.removeAllRanges()
        selection?.addRange(newRange)
      }
    },
    [],
  )

  return (
    <div
      data-overlayscrollbars-initialize
      suppressHydrationWarning
      suppressContentEditableWarning
      className='mr-[-1.25rem] h-full min-h-40 flex-1 resize-none overflow-y-auto pr-[1.25rem] outline-none'
      ref={divRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={contentEditableRef}
        data-placeholder={placeholder}
        className='h-0 min-h-full w-full whitespace-pre-wrap break-all text-justify text-[1.125rem] font-normal leading-[1.6875rem] tracking-[-0.0225rem] text-slate-600 outline-none empty:before:text-slate-300 empty:before:content-[attr(data-placeholder)] tab:leading-[1.9125rem]'
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
