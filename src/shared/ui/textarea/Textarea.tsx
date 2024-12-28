'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { useOverlayScrollbars } from 'overlayscrollbars-react'

interface TextareaProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

const Textarea: FC<TextareaProps> = ({ onChange, value, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)
  const contentEditableRef = useRef<HTMLDivElement>(null)
  const lastValueRef = useRef(value)

  const [initialize] = useOverlayScrollbars({
    options: {
      scrollbars: {
        theme: 'os-theme-custom',
        autoHide: 'never',
        visibility: isFocused ? 'visible' : 'hidden',
        dragScroll: true,
      },
      overflow: {
        x: 'hidden',
        y: 'scroll',
      },
    },
    defer: true,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (divRef.current && isClient) {
      initialize(divRef.current)
    }
  }, [initialize, isClient])

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

    if (!text && event.currentTarget.innerHTML === '<br>') {
      event.currentTarget.innerHTML = ''
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    setIsFocused(false)

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
