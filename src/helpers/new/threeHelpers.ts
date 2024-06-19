import * as THREE from 'three'

export function generateRandomRgbGrey(min: number, max: number) {
  var value = Math.round(Math.random() * (max - min) + min)
  return new THREE.Color(`rgb(${value}, ${value}, ${value})`)
}