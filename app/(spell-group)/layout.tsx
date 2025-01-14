import { ReduxProvider } from '@/app/providers/redux-provider'

const SpellGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider>{children}</ReduxProvider>
}

export default SpellGroupLayout
