import { useUserReplace } from '../model/use-user-replace'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

interface CustomTextEditorContent {
  handleClose: () => void
}

export const CustomTextEditorContent = ({
  handleClose,
}: CustomTextEditorContent) => {
  const { handleChange, handleEdit, value, errorWord } = useUserReplace({
    handleClose,
  })

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <p className='flex items-center justify-center gap-[0.44rem] text-lg text-green-100 pc:gap-[0.42rem] pc:text-[19.2px] pc:leading-normal'>
          <span className='inline-block h-[11px] w-[11px] rounded-full bg-green-100 pc:h-[0.66rem] pc:w-[0.66rem]'></span>
          {errorWord}
        </p>
        <div className='h-[1.125rem] w-[1.125rem] bg-chevron-down bg-contain bg-center bg-no-repeat focus-visible:ring-0 pc:h-[0.96rem] pc:w-[0.96rem]' />
      </div>
      <Input
        placeholder='직접 수정해 보세요!'
        className='w-full placeholder:text-slate-300 pc:h-[2.4rem] pc:rounded-[0.36rem] pc:px-[0.42rem] pc:py-[0.17rem] pc:text-[1.2rem] pc:leading-[170%] pc:placeholder:text-[1.2rem]'
        value={value}
        onChange={handleChange}
      />
      <Button
        disabled={!value}
        className='h-[3.125rem] py-[0.88rem] text-[1.125rem] pc:h-[3rem] pc:rounded-[0.31rem] pc:py-[0.84rem] pc:text-[1.2rem]'
        onClick={handleEdit}
      >
        수정하기
      </Button>
    </>
  )
}
