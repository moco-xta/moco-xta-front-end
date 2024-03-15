export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function splitTextInArrayOfWords(text: string) {
  return text.split(' ')
}

export function splitTextInArrayOfLetters(text: string) {
  return text.split('')
}
