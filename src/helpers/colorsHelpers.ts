export function hexToRgba(hex: string) {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  let r,
    g,
    b,
    a = 1

  if (hex.length === 8) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
    a = parseInt(hex.slice(6, 8), 16) / 255
  } else if (hex.length === 6) {
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  } else {
    throw new Error('Invalid HEX color format.')
  }

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function indexToGreyGradient(
  index: number,
  totalItems: number,
  minLightness = 20,
  maxLightness = 90,
) {
  if (index < 0 || index >= totalItems) {
    throw new Error('Index is out of bounds.')
  }
  const lightness = minLightness + ((maxLightness - minLightness) * index) / (totalItems - 1)
  return `hsl(0, 0%, ${lightness}%)`
}
