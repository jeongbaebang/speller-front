const SubmittedContent = ({ data }: { data: string }) => {
  return (
    <div className='min-h-[6.75rem] rounded-2xl bg-slate-200 p-4 tab:min-h-[7.25rem] tab:p-5 pc:grid pc:max-h-[11.25rem] pc:grid-cols-[auto_1fr] pc:gap-x-[3.625rem] pc:rounded-[1.25rem]'>
      <h3 className='mb-2 text-base font-semibold tracking-[-0.02rem] text-slate-600 tab:text-lg tab:tracking-[-0.0225rem] pc:text-xl'>
        발송된 문의 내용
      </h3>
      <p className='line-clamp-2 text-base leading-[140%] tracking-[-0.02rem] text-slate-500 pc:line-clamp-4 pc:text-xl pc:leading-[160%] pc:tracking-[-0.025rem]'>
        {data}
      </p>
    </div>
  )
}

export { SubmittedContent }
