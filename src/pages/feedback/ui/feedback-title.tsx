const FeedbackTitle = () => {
  return (
    <div>
      <h1 className='mb-2 text-2xl font-bold leading-[140%] tracking-[-0.03rem] tab:mb-[0.625rem] tab:text-[1.75rem] tab:tracking-[-0.035rem] pc:mb-0 pc:text-[3.125rem] pc:leading-[170%] pc:tracking-[-0.06rem]'>
        문의하기
      </h1>
      <div className='text-base leading-[140%] tracking-[-0.02rem] tab:text-lg tab:tracking-[-0.0225rem] pc:text-[1.375rem] pc:leading-[170%] pc:tracking-[-0.0275rem]'>
        <p>궁금한 점을 자유롭게 작성해 주시고,</p>
        <p>답변을 원하실 경우만 이메일을 함께 작성해 주세요.</p>
      </div>
    </div>
  )
}

export { FeedbackTitle }
