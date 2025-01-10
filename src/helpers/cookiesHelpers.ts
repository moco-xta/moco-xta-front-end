export function getCookieByName(name: string) {
  const cookie: {
    [key: string]: string
  } = {}
  document.cookie.split(';').forEach(function (el) {
    const [key, value] = el.split('=')
    cookie[key.trim()] = value
  })
  return cookie[name]
}
