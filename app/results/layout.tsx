import { BaseLayout } from '@/shared/ui/base-layout'

const ResultsLayout = ({ children }: { children: React.ReactNode }) => {
  return <BaseLayout footerLayout='condensed'>{children}</BaseLayout>
}

export default ResultsLayout
