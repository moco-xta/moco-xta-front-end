import * as THREE from 'three'

import type { Text3DData } from '@/types/animation/three/dataTypes'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as greetingTextsConstants } from '@/constants/home/hero/three/greeting/texts/greetingTextsConstants.json'

export const greetingTextsDefaultValues: Text3DData = {
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
