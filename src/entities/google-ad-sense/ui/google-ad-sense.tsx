'use client'

import { cn } from '@/shared/lib/tailwind-merge'
import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

interface GoogleAdSenseProps {
  slot?: string
  className?: string
}
const GoogleAdSense = ({ slot, className }: GoogleAdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (adRef.current) {
      // 이미 초기화된 광고인지 확인
      if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    }
  }, [])

  return (
    <ins
      className={cn('adsbygoogle block', className)}
      data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
      data-ad-slot={slot}
      data-ad-format='auto'
      data-full-width-responsive='true'
    />
  )
}

export default GoogleAdSense
