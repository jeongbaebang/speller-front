import { ReduxProvider } from '@/app/providers/redux-provider'
import { BaseLayout } from '@/shared/ui/base-layout'

const SpellGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <BaseLayout>{children}</BaseLayout>
    </ReduxProvider>
  )
}

export default SpellGroupLayout
