export default function Home() {
  return (
    <div className="container mx-auto relative">
      <main className="grid grid-rows-[auto_1fr_auto] h-full">
        <div className="bg-slate-800 p-6">
          <h2 className="text-xl font-bold mb-2">섹션 1</h2>
        </div>
        <div className="bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-2">섹션 2</h2>
        </div>
        <div className="bg-slate-800 p-6">
          <h2 className="text-xl font-bold mb-2">섹션 3</h2>
        </div>
      </main>
      {/* 광고 영역 */}
      <aside className="hidden pc:flex absolute top-0 -right-[12.25rem] w-[10rem] h-full items-center bg-[pink] overflow-hidden">
        <div className="min-w-full h-[37.5rem] bg-[black]">2</div>
      </aside>
    </div>
  );
}
