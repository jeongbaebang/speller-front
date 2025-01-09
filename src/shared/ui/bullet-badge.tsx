import { cn } from '@/shared/lib/tailwind-merge'

interface BulletBadgeProps {
  className?: string
}

const BulletBadge = ({ className }: BulletBadgeProps) => {
  return <i className={cn('h-2 w-2 rounded-full', className)}></i>
}

export { BulletBadge }
