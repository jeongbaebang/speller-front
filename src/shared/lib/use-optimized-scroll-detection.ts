import { useCallback, useEffect, useRef } from 'react'

const useOptimizedScrollDetection = (
  callback: (isScrolling: boolean) => void,
  ms: number,
) => {
  const scrollingRef = useRef(false)
  const rafRef = useRef<number>()
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!scrollingRef.current) {
        scrollingRef.current = true
        callback(true)
      }

      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        scrollingRef.current = false
        callback(false)
      }, ms)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      clearTimeout(timeoutRef.current)
    }
  }, [])

  return handleScroll
}

export default useOptimizedScrollDetection
