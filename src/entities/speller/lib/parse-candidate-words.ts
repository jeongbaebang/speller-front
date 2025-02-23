const parseCandidateWords = (
  candWord: string,
): { id: number; word: string }[] => {
  return candWord.split('|').map((word, id) => ({ id, word }))
}

export { parseCandidateWords }
