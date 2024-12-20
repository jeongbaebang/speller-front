import { Button } from "@/shared/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 tab:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center tab:items-start">
        <h2 className="text-xl font-bold">Button</h2>
        <div className="flex gap-4 items-center flex-col tab:flex-row">
          <Button>click</Button>
          <Button disabled>click</Button>
        </div>

        <h2 className="text-xl font-bold">Colors</h2>
        <div className="grid pc:grid-cols-2 tab:grid-cols-1">
          <div className="grid grid-cols-10 bg-white p-2 gap-5">
            <h3 className="text-lg font-medium">Blue</h3>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-blue-100 rounded-md"></div>
              <span className="text-sm font-bold">100</span>
              <span className="text-xs">#C3CAFF</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-blue-200 rounded-md"></div>
              <span className="text-sm font-bold">200</span>
              <span className="text-xs">#A4AEFF</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-blue-300 rounded-md"></div>
              <span className="text-sm font-bold">300</span>
              <span className="text-xs">#6A7DFF</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-blue-400 rounded-md"></div>
              <span className="text-sm font-bold">400</span>
              <span className="text-xs">#495EFF</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-blue-500 rounded-md"></div>
              <span className="text-sm font-bold">500</span>
              <span className="text-xs">#3046EC (primary)</span>
            </div>
          </div>

          <div className="grid grid-cols-10 bg-white p-2 gap-5">
            <h3 className="text-lg font-medium">Slate</h3>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-100 rounded-md"></div>
              <span className="text-sm font-bold">100</span>
              <span className="text-xs">#F3F4F9</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-200 rounded-md"></div>
              <span className="text-sm font-bold">200</span>
              <span className="text-xs">#E9EAF2</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-300 rounded-md"></div>
              <span className="text-sm font-bold">300</span>
              <span className="text-xs">#B8B8BE</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-400 rounded-md"></div>
              <span className="text-sm font-bold">400</span>
              <span className="text-xs">#8C8B94</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-500 rounded-md"></div>
              <span className="text-sm font-bold">500</span>
              <span className="text-xs">#646468</span>
            </div>
            <div className="flex flex-col">
              <div className="w-10 h-10 bg-slate-600 rounded-md"></div>
              <span className="text-sm font-bold">600</span>
              <span className="text-xs">#292933</span>
            </div>
          </div>

          <div className="grid grid-cols-10 bg-white p-2">
            <h3 className="text-lg font-medium">etc</h3>
            <div>
              <div className="w-10 h-10 bg-muted rounded-md"></div>
              <span className="text-xs">
                muted
                <br />
                (disabled)
              </span>
            </div>
            <div>
              <div className="w-10 h-10 bg-background rounded-md"></div>
              <span className="text-xs">background</span>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
