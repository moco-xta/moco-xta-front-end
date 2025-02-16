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

export function getColorRelationships(hex: string) {
  // Remove the '#' if it exists
  hex = hex.replace('#', '')

  // Convert 3-digit hex to 6-digit hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  // Validate hex input
  /* if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB or #RGB.');
  } */

  // Convert hex to RGB
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // Convert RGB to HSL (for easier color manipulation)
  const [h, s, l] = rgbToHsl(r, g, b)

  // Helper function to convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    const [r, g, b] = hslToRgb(h, s, l)
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  // Helper function to convert RGB to hex
  const toHex = (value: number) => {
    const hex = value.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  // Calculate complementary color (180 degrees)
  const complementary = hslToHex((h + 180) % 360, s, l)

  // Calculate analogous colors (30 degrees apart)
  const analogous1 = hslToHex((h + 30) % 360, s, l)
  const analogous2 = hslToHex((h - 30 + 360) % 360, s, l)

  // Calculate triadic colors (120 degrees apart)
  const triadic1 = hslToHex((h + 120) % 360, s, l)
  const triadic2 = hslToHex((h + 240) % 360, s, l)

  // Calculate split-complementary colors (150 and 210 degrees)
  const splitComplementary1 = hslToHex((h + 150) % 360, s, l)
  const splitComplementary2 = hslToHex((h + 210) % 360, s, l)

  // Calculate tetradic colors (90, 180, and 270 degrees)
  const tetradic1 = hslToHex((h + 90) % 360, s, l)
  const tetradic2 = hslToHex((h + 180) % 360, s, l)
  const tetradic3 = hslToHex((h + 270) % 360, s, l)

  return {
    complementary,
    analogous: [analogous1, analogous2],
    triadic: [triadic1, triadic2],
    splitComplementary: [splitComplementary1, splitComplementary2],
    tetradic: [tetradic1, tetradic2, tetradic3],
  }
}

// Helper function to convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h * 360, s * 100, l * 100]
}

// Helper function to convert HSL to RGB
function hslToRgb(h: number, s: number, l: number) {
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export type TRgb = {
  r: number
  g: number
  b: number
}

export function generateGradient(hex: string, steps = 10) {
  // Remove the '#' if it exists
  hex = hex.replace('#', '')

  // Convert 3-digit hex to 6-digit hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  // Validate hex input
  if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB or #RGB.')
  }

  // Convert hex to RGB
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // Define white and black in RGB
  const white = { r: 255, g: 255, b: 255 }
  const black = { r: 0, g: 0, b: 0 }

  // Function to interpolate between two colors
  const interpolate = (start: TRgb, end: TRgb, factor: number) => {
    return {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    }
  }

  // Function to convert RGB to hex
  const rgbToHex = (rgb: TRgb) => {
    return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`
  }

  // Helper function to convert a number to 2-digit hex
  const toHex = (value: number) => {
    const hex = value.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  // Generate gradient steps
  const gradient = []
  for (let i = 0; i < steps; i++) {
    const factor = i / (steps - 1) // Factor from 0 to 1

    // Interpolate from white to the provided color
    const color1 = interpolate(white, { r, g, b }, factor)

    // Interpolate from the provided color to black
    const color2 = interpolate({ r, g, b }, black, factor)

    // Combine the two interpolations
    const finalColor = interpolate(color1, color2, factor)

    // Convert to hex and add to the gradient array
    gradient.push(rgbToHex(finalColor))
  }

  return gradient
}

export function getLighterAndDarkerColors(hex: string, steps = 5) {
  // Remove the '#' if it exists
  hex = hex.replace('#', '')

  // Convert 3-digit hex to 6-digit hex
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }

  // Validate hex input
  if (hex.length !== 6 || !/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('Invalid hex color format. Use #RRGGBB or #RGB.')
  }

  // Convert hex to RGB
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  // Convert RGB to HSL
  const [h, s, l] = rgbToHsl(r, g, b)

  // Function to convert HSL to hex
  const hslToHex = (h: number, s: number, l: number) => {
    const [r, g, b] = hslToRgb(h, s, l)
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  // Helper function to convert a number to 2-digit hex
  const toHex = (value: number) => {
    const hex = value.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  // Generate lighter colors
  const lighterColors = []
  for (let i = 1; i <= steps; i++) {
    const lighterLightness = Math.min(l + i * 10, 100) // Increase lightness
    lighterColors.push(hslToHex(h, s, lighterLightness))
  }

  // Generate darker colors
  const darkerColors = []
  for (let i = 1; i <= steps; i++) {
    const darkerLightness = Math.max(l - i * 10, 0) // Decrease lightness
    darkerColors.push(hslToHex(h, s, darkerLightness))
  }

  return {
    lighter: lighterColors,
    darker: darkerColors,
  }
}
