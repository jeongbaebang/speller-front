import { BaseLayout } from '@/shared/ui/base-layout'

const SpellerLayout = ({ children }: { children: React.ReactNode }) => {
  return <BaseLayout footerLayout='default'>{children}</BaseLayout>
}

export default SpellerLayout
