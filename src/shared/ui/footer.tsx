import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-300 pt-6 tab:py-[1.875rem]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center tab:flex-row tab:justify-between">
          <div className="flex items-center flex-col gap-1 text-[0.625rem] tab:items-start pb-4 tab:pb-0">
            {/* 고객센터 섹션 */}
            <div className="flex gap-2 text-gray-800">
              <span className="font-semibold text-xs">구매문의</span>
              <a href="tel:" className="flex items-center gap-1">
                <div className="relative size-3">
                  <Image
                    className="object-cover"
                    src="/call.svg"
                    alt="call logo"
                    fill
                  />
                </div>
                <span>(주)나라인포테크</span>
              </a>
              <a href="mailto:" className="flex items-center gap-1">
                <div className="relative size-3">
                  <Image
                    className="object-cover"
                    src="/email.svg"
                    alt="email logo"
                    fill
                  />
                </div>
                <span>우리말배움터 관리자</span>
              </a>
            </div>
            {/* 저작권 정보 */}
            <div className="text-gray-500 text-center tab:text-start">
              <p className="tab:hidden">
                한국어 맞춤법/문법 검사기는 부산대학교 인공지능연구실과
              </p>
              <p className="tab:hidden">
                (주)나라인포테크가 함께 만들고 있습니다.
              </p>
              <p className="hidden tab:block">
                한국어 맞춤법/문법 검사기는 부산대학교 인공지능연구실과
                (주)나라인포테크가 함께 만들고 있습니다.
              </p>
              <p>이 검사기는 개인이나 학생만 무료로 사용할 수 있습니다.</p>
            </div>
            {/* 카피라이트 */}
            <div className="text-gray-500">
              Copyrightⓒ2001 AI Lab & Narainfotech. All Rights Reserved
            </div>
          </div>
          {/* 광고 영역 */}
          <div className="w-full tab:w-1/3 bg-[#FF4C4C] p-4 text-white text-center">
            광고
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
