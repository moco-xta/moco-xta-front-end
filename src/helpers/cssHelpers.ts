export function getUvMousePositionOnDiv(e: MouseEvent) {
  const target = e.target as Element
  const currentTarget = e.currentTarget as HTMLElement
  const boundingClientRect = target.getBoundingClientRect()
  const width = currentTarget.offsetWidth
  const height = currentTarget.offsetHeight
  return {
    x:
      ((e.clientX - boundingClientRect.left - width / 2) * (width / 200)) / 100,
    y:
      (-(e.clientY - boundingClientRect.top - height / 2) * (height / 200)) /
      100,
  }
}

export function getUvMousePositionOnWindow(e: MouseEvent) {
  const width = window.innerWidth
  const height = window.innerHeight
  return {
    x: (((e.clientX * 100) / (width / 2)) - 100) / 100,
    y: (((e.clientY * 100) / (height / 2)) - 100) / 100
  }
}

export function returnArrayOfCharacters(text: string) {
  const test = []
  for (var i = 0; i < text.length; i++) {
    test.push(text.charAt(i))
  }
  return test
}
