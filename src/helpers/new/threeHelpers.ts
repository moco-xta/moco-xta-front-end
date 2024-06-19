import * as THREE from 'three'

export function generateRandomRgbGrey(min: number, max: number) {
  const value = Math.round(Math.random() * (max - min) + min)
  return new THREE.Color(`rgb(${value}, ${value}, ${value})`)
}

export function generateRandomHexGrey(min: number, max: number) {
  const decimalValue = Math.round(Math.random() * (max - min) + min)
  var hexadecimalValue = decimalValue.toString(16)
  return new THREE.Color(
    '#' + hexadecimalValue + hexadecimalValue + hexadecimalValue,
  )
}
