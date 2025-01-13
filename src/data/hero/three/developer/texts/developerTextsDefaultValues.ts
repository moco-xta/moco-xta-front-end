import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as developergTextsConstants } from '@/constants/hero/three/developer/texts/developerTextsConstants.json'

export const developerTextsDefaultValues: TText3DData = {
  geometry: {
    font: developergTextsConstants.geometry.font,
    // size: developergTextsConstants.geometry.size,
    // depth: developergTextsConstants.geometry.depth,
    center: developergTextsConstants.geometry.center,
    spaceWidth: developergTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: developergTextsConstants.material.color,
    transparent: developergTextsConstants.material.transparent,
    opacity: developergTextsConstants.material.opacity,
    side: THREE.DoubleSide,
  },
}
