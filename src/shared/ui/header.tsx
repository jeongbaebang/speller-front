const Header = () => {
  return (
    <header className="bg-primary tab:bg-gray-500 pc:bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-xl font-bold">
            한국어 맞춤법 검사기
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-white">
              사용법
            </a>
            <a href="#" className="text-white">
              문의하기
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
