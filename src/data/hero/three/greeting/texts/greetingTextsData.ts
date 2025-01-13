import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as greetingTextsConstants } from '@/constants/hero/three/greeting/texts/greetingTextsConstants.json'

export const greetingTextsDefaultValues: TText3DData = {
  geometry: {
    font: greetingTextsConstants.geometry.font,
    // size: greetingTextsConstants.geometry.size,
    // depth: greetingTextsConstants.geometry.depth,
    center: greetingTextsConstants.geometry.center,
    spaceWidth: greetingTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: greetingTextsConstants.material.color,
    transparent: greetingTextsConstants.material.transparent,
    opacity: greetingTextsConstants.material.opacity,
    side: THREE.DoubleSide,
  },
}
