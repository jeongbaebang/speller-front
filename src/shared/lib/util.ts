export const getWordsAroundIndex = (text: string, startIndex: number) => {
  const words = text.split(/\s+/)

  let currentWordStart = 0
  let currentWordEnd = 0

  // 단어의 시작과 끝 인덱스를 계산
  for (let i = 0; i < words.length; i++) {
    currentWordEnd = currentWordStart + words[i].length
    if (currentWordStart <= startIndex && startIndex < currentWordEnd) {
      const prevWord = words[i - 1] || ''
      const currentWord = words[i]
      const nextWord = words[i + 1] || ''

      return `${prevWord} ${currentWord} ${nextWord}`
    }
    currentWordStart = currentWordEnd + 1 // 다음 단어 시작 위치 (띄어쓰기 포함)
  }

  throw new Error('Invalid index')
}
