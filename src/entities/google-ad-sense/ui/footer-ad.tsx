import GoogleAdSense from './google-ad-sense'

const FooterAd = () => {
  return (
    <GoogleAdSense
      className='mb-1 h-[50px] w-80 rounded-sm bg-slate-300 p-4 text-center tab:mb-0 tab:h-[90px] tab:w-[728px]'
      data-ad-slot='9725653724'
      data-full-width-responsive='true'
    />
  )
}

export { FooterAd }
