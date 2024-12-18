const Header = () => {
  return (
    <header className='bg-primary p-4 tab:bg-gray-500 pc:bg-gray-800'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='text-xl font-bold text-white'>
            한국어 맞춤법 검사기
          </div>
          <nav className='flex space-x-4'>
            <a href='#' className='text-white'>
              사용법
            </a>
            <a href='#' className='text-white'>
              문의하기
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
