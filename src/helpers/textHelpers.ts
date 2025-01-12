export function capitalizeFirstLetter(word: string): string {
  const firstLetter = word.charAt(0)
  const firstLetterUpperCase = firstLetter.toUpperCase()
  const remainingLetters = word.slice(1)
  return firstLetterUpperCase + remainingLetters
}
