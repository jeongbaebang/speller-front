import Link from "next/link";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-[1.125rem_1.5625rem] pc:p-[2rem_3.75rem]">
      <div className="flex items-center gap-[1.25rem]">
        <h1 className="text-[1.125rem] font-[700]">한국어 맞춤법 검사기</h1>
        <Link href="/" className="hidden tab:inline-flex p-[0.625rem_0.75rem]">
          이전 버전 사용하기
        </Link>
      </div>
      <div className="hidden pc:flex items-center gap-[1rem]">
        <Link href="/" className="tab:inline-flex p-[0.625rem_0.75rem]">
          사용법
        </Link>
        <Link href="/" className="tab:inline-flex p-[0.625rem_0.75rem]">
          문의하기
        </Link>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="pc:hidden w-[1.5rem] h-[1.5rem] p-0 bg-icon-menu bg-no-repeat bg-center bg-[length:1.25rem] hover:bg-accent">
            <span className="sr-only">메뉴보기</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto rounded-lg">
          <ul>
            <li className="tab:hidden">
              <Link
                href="/"
                className="block p-[0.75rem] text-[0.875rem] leading-none"
              >
                이전 버전 사용하기
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block p-[0.75rem] text-[0.875rem] leading-none"
              >
                사용법
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block p-[0.75rem] text-[0.875rem] leading-none"
              >
                문의하기
              </Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export { Header };
