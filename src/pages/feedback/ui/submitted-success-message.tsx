const SubmittedSuccessMessage = () => {
  return (
    <div className='text-center pc:mb-[2.875rem] pc:text-left'>
      <h2 className='text-2xl font-bold tracking-[-0.03rem] text-slate-600 tab:text-[2rem] tab:font-semibold tab:leading-[3rem] tab:tracking-[-0.04rem] pc:text-5xl pc:tracking-[-0.06rem]'>
        문의 발송 완료
      </h2>
      <div className='mt-2 text-base tracking-[-0.02rem] tab:mt-3 tab:text-lg tab:tracking-[-0.025rem] pc:mt-6 pc:text-2xl pc:tracking-[-0.03rem]'>
        <p>소중한 의견 감사합니다.</p>
        <p>기재해 주신 의견은 상세히 검토하여 반영하겠습니다.</p>
      </div>
    </div>
  )
}

export { SubmittedSuccessMessage }
