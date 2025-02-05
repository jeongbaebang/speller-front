import { ContentLayout } from './content-layout'
import { FeedbackForm } from './feedback-form'
import { FeedbackTitle } from './feedback-title'

const FeedbackPage = () => {
  return (
    <ContentLayout className='gap-10'>
      <FeedbackTitle />
      <FeedbackForm />
    </ContentLayout>
  )
}

export { FeedbackPage }
