import Link from 'next/link'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-white p-[1.125rem_1.5625rem] pc:p-[2rem_3.75rem]'>
      <div className='flex items-center gap-[1.25rem]'>
        <h1 className='text-[1.125rem] font-[700]'>한국어 맞춤법 검사기</h1>
        <Link href='/' className={`hidden ${classes.linkButton}`}>
          이전 버전 사용하기
        </Link>
      </div>
      <div className='hidden items-center gap-[1rem] pc:flex'>
        <Link href='/' className={classes.linkButton}>
          사용법
        </Link>
        <Link href='/' className={classes.linkButton}>
          문의하기
        </Link>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className='h-[1.5rem] w-[1.5rem] bg-icon-menu bg-[length:1.25rem] bg-center bg-no-repeat p-0 hover:bg-accent pc:hidden'>
            <span className='sr-only'>메뉴보기</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto rounded-lg p-0'>
          <ul>
            <li>
              <Link href='/' className={classes.popoverButton}>
                사용법
              </Link>
            </li>
            <li>
              <Link href='/' className={classes.popoverButton}>
                문의하기
              </Link>
            </li>
            <li className='tab:hidden'>
              <Link href='/' className={classes.popoverButton}>
                이전 버전 사용하기
              </Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </header>
  )
}

const classes = {
  linkButton: 'p-[0.625rem_0.75rem] tab:inline-flex',
  popoverButton: 'block p-[0.75rem] text-[0.875rem] leading-none',
}

export { Header }
