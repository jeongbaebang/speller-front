import GoogleAdSense from '@/entities/google-ad-sense/ui/google-ad-sense'
import React from 'react'

const MainAd = () => {
  return (
    <div className='my-24 hidden rounded-md bg-slate-300 pc:block'>
      <GoogleAdSense
        className='h-[37.5rem] w-40 place-content-center'
        data-ad-slot='9725653724'
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    </div>
  )
}

export { MainAd }
