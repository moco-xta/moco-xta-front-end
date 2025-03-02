export function splitTextToWords(text: string): string[] {
  return text.split(' ')
}

export function splitTextToCharacters(text: string): string[] {
  return Array.from(text)
}
