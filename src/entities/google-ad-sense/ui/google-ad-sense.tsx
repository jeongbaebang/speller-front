'use client'

import { cn } from '@/shared/lib/tailwind-merge'
import React, { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[]
  }
}

interface GoogleAdSenseProps {
  className?: string
}
const GoogleAdSense = ({ className, ...props }: GoogleAdSenseProps) => {
  const adRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    if (adRef.current) {
      // 이미 초기화된 광고인지 확인
      if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_AD_CLIENT) {
    console.error('AdSense client ID is missing.')
    return null
  }

  return (
    <ins
      ref={adRef}
      className={cn('adsbygoogle', 'block', className)}
      data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT}
      {...props}
    />
  )
}

export default GoogleAdSense
