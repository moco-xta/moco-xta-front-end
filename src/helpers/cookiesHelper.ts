export function getCookieByName(name: string) {
  let cookie: { [key: string]: string } = {}
  document.cookie.split(';').forEach(function (el) {
    let [key, value] = el.split('=')
    cookie[key.trim()] = value
  })
  return cookie[name]
}
