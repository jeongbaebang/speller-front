import { ContentLayout } from './content-layout'
import { FeedbackForm } from './feedback-form'
import { FeedbackTitle } from './feedback-title'

const FeedbackPage = () => {
  return (
    <ContentLayout>
      <FeedbackTitle />
      <FeedbackForm />
    </ContentLayout>
  )
}

export { FeedbackPage }
