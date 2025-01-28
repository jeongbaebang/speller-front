import GoogleAdSense from '@/entities/google-ad-sense/ui/google-ad-sense'
import React from 'react'

const MainAd = () => {
  return (
    <div className='my-24 hidden pc:block'>
      <GoogleAdSense
        slot='9725653724'
        className='h-[37.5rem] w-40 place-content-center'
      />
    </div>
  )
}

export { MainAd }
