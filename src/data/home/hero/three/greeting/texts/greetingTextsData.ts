import * as THREE from 'three'

import type { Text3DData } from '@/types/animation/three/dataTypes'

export const greetingTextsDefaultValues: Text3DData = {
  text3D: {
    font: 'fonts/json/Barlow_Condensed_Bold.json',
    size: 3.5,
    depth: 1,
    center: true,
    spaceWidth: 0.05,
  },
  material: {
    color: '#3d3d3d',
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  },
}
