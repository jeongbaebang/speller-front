import Link from "next/link";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const Header = () => {
  return (
    <header>
      <h1>한국어 맞춤법 검사기</h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <span className="sr-only">메뉴보기</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <ul>
            <li>
              <Link href="/">이전 버전 사용하기</Link>
            </li>
            <li>
              <Link href="/">사용법</Link>
            </li>
            <li>
              <Link href="/">문의하기</Link>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </header>
  );
};

export { Header };
