export default function Home() {
  return (
    <div className='container relative mx-auto'>
      <main className='grid h-full grid-rows-[auto_1fr_auto]'>
        <div className='bg-slate-800 p-6'>
          <h2 className='mb-2 text-xl font-bold'>섹션 1</h2>
        </div>
        <div className='bg-slate-900 p-6'>
          <h2 className='mb-2 text-xl font-bold'>섹션 2</h2>
        </div>
        <div className='bg-slate-800 p-6'>
          <h2 className='mb-2 text-xl font-bold'>섹션 3</h2>
        </div>
      </main>
      {/* 광고 영역 */}
      <aside className='absolute -right-[12.25rem] top-0 hidden h-full w-[10rem] items-center overflow-hidden bg-[pink] pc:flex'>
        <div className='h-[37.5rem] min-w-full bg-[black]'>2</div>
      </aside>
    </div>
  )
}
