import * as THREE from 'three'

export const greetingTextsData = {
  defaultValues: {
    word3d: {
      keySuffix: 'hi_text',
      font: 'fonts/json/Barlow_Condensed_Bold.json',
      size: 3.5,
      depth: 1,
      center: true,
      spaceWidth: 0.05,
    },
    material: {
      color: '#3d3d3d',
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    },
  },
}
