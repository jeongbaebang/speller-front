import { ContentLayout } from './content-layout'
import { FeedbackForm } from './feedback-form'
import { FeedbackTitle } from './feedback-title'

const FeedbackPage = () => {
  return (
    <ContentLayout className='gap-10 pt-6 tab:pt-7 pc:pt-[2.125rem]'>
      <FeedbackTitle />
      <FeedbackForm />
    </ContentLayout>
  )
}
export { FeedbackPage }
