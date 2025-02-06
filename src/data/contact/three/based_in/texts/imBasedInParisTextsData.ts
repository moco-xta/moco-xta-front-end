import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as imBasedInParisTextsConstants } from '@/constants/contact/three/based_in/texts/imBasedInParisTextsConstants.json'

export const basedInParisTextsDefaultValues: TText3DData = {
  geometry: {
    font: imBasedInParisTextsConstants.geometry.font,
    size: imBasedInParisTextsConstants.geometry.size,
    depth: imBasedInParisTextsConstants.geometry.depth,
    center: imBasedInParisTextsConstants.geometry.center,
    spaceWidth: imBasedInParisTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: imBasedInParisTextsConstants.material.color,
    transparent: imBasedInParisTextsConstants.material.transparent,
    opacity: imBasedInParisTextsConstants.material.opacity,
    side: THREE.DoubleSide,
  },
}
