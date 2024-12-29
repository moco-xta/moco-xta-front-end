import * as THREE from 'three'

import type { TText3DData } from '@/types/animation/three/types'

import { default as greetingTextsConstants } from '@/constants/home/hero/three/greeting/texts/greetingTextsConstants.json'

export const getGreetingTextsDefaultValues: TText3DData = {
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
