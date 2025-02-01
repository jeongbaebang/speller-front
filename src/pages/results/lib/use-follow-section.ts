import { useSpeller } from '@/entities/speller'
import { createRef } from 'react'

const useFollowSection = () => {
  const { response, correctInfo } = useSpeller()

  const correctRefs = Array.from(
    { length: Object.keys(correctInfo).length },
    () => createRef<HTMLDivElement>(),
  )

  const errorRefs = Array.from({ length: response?.errInfo.length }, () =>
    createRef<HTMLDivElement>(),
  )

  const correctSectionHandler =
    (refs: React.RefObject<HTMLDivElement>[]) => (index: number) => {
      refs[index].current?.scrollIntoView({ behavior: 'smooth' })
    }

  const errorSectionHandler =
    (refs: React.RefObject<HTMLDivElement>[]) => (index: number) => {
      refs[index].current?.scrollIntoView({ behavior: 'smooth' })
    }

  return { correctRefs, errorRefs, correctSectionHandler, errorSectionHandler }
}

export { useFollowSection }
