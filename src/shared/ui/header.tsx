const Header = () => {
  return (
    <header className='tab:bg-gray-500 pc:bg-gray-800 bg-white p-4 tab:px-[3.75rem]'>
      <div className='pc:container pc:mx-auto'>
        <div className='flex items-center justify-between text-slate-600'>
          <div className='text-xl font-bold'>한국어 맞춤법 검사기</div>
          <nav className='flex space-x-4'>
            <a href='#'>사용법</a>
            <a href='#'>문의하기</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
