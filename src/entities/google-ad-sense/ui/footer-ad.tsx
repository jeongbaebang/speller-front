import GoogleAdSense from './google-ad-sense'

const FooterAd = () => {
  return (
    <GoogleAdSense
      className='mb-1 hidden h-[50px] w-80 rounded-sm bg-slate-300 p-4 text-center tab:mb-0 tab:h-[90px] tab:w-[728px] pc:block'
      data-ad-slot='4790060150'
      data-full-width-responsive='true'
    />
  )
}

export { FooterAd }
