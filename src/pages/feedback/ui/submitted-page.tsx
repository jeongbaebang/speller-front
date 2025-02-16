import { ContentLayout } from './content-layout'
import { SubmittedSuccessMessage } from './submitted-success-message'
import { SubmittedContent } from './submitted-content'
import { SubmittedControl } from './submitted-control'

const SubmittedPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ content: string }>
}) => {
  const { content } = await searchParams

  return (
    <ContentLayout className='gap-5 pt-[2.125rem] tab:pt-[3.75rem] pc:grid-cols-[1fr_auto] pc:gap-x-9 pc:gap-y-0 pc:pt-[6.125rem]'>
      {/* 제출 완료 이미지 */}
      <div className='h-[180px] rounded-sm bg-slate-400' />
      <div className='space-y-7 tab:space-y-8 pc:max-w-[36.25rem] pc:space-y-0'>
        {/* 의견 제출 성공 메시지 */}
        <SubmittedSuccessMessage />
        {/* 발송된 문의 내용   */}
        <SubmittedContent data={content} />
        {/* 다시 제출, 홈 이동 버튼 */}
        <SubmittedControl />
      </div>
    </ContentLayout>
  )
}

export { SubmittedPage }
