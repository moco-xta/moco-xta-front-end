export function getCookieByName(name: string) {
  if (typeof document === 'undefined') return undefined

  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=')
    if (key.trim() === name) {
      return value
    }
  }

  return undefined
}
