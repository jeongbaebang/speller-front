import { ErrorInfoSection } from './error-info-section'
import { BulletBadge } from '@/shared/ui/bullet-badge'

const ErrorTrackingSection = () => {
  return (
    <div className='rounded-lg border border-blue-500 bg-white p-[1.125rem_1.25rem]'>
      <h2 className='flex items-center gap-1 text-[1.125rem] font-[600]'>
        맞춤법/문법 오류
        <span className='text-red-100'>3개</span>
      </h2>
      <ErrorInfoSection />
      <div>
        <div className='grid w-1/2 grid-cols-2 gap-1'>
          <span className='flex items-center gap-2 text-[0.875rem] font-[500]'>
            <BulletBadge className='bg-red-100' />
            맞춤법
          </span>
          <span className='flex items-center gap-2 text-[0.875rem] font-[500]'>
            <BulletBadge className='bg-purple-100' />
            표준어 의심
          </span>
          <span className='flex items-center gap-2 text-[0.875rem] font-[500]'>
            <BulletBadge className='bg-green-100' />
            띄어쓰기
          </span>
          <span className='flex items-center gap-2 text-[0.875rem] font-[500]'>
            <BulletBadge className='bg-blue-500' />
            통계적 교정
          </span>
        </div>
      </div>
    </div>
  )
}

export { ErrorTrackingSection }
