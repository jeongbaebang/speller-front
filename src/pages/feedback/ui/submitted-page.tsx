import { ContentLayout } from './content-layout'
import { SubmittedSuccessMessage } from './submitted-success-message'

const SubmittedPage = () => {
  return (
    <ContentLayout className='gap-5'>
      {/* 제출 완료 이미지 */}
      <div className='h-[180px] rounded-sm bg-slate-400'></div>
      <div>
        {/* 의견 제출 성공 메시지 */}
        <SubmittedSuccessMessage />
      </div>
    </ContentLayout>
  )
}

export { SubmittedPage }
