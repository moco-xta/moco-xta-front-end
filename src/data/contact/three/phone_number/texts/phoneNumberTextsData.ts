import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as phoneNumberTextsConstants } from '@/constants/contact/three/phone_number/texts/phoneNumberTextsConstants.json'

export const phoneNumberTextsDefaultValues: TText3DData = {
  geometry: {
    font: phoneNumberTextsConstants.geometry.font,
    size: phoneNumberTextsConstants.geometry.size,
    depth: phoneNumberTextsConstants.geometry.depth,
    center: phoneNumberTextsConstants.geometry.center,
    spaceWidth: phoneNumberTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: phoneNumberTextsConstants.material.color,
    transparent: phoneNumberTextsConstants.material.transparent,
    opacity: phoneNumberTextsConstants.material.opacity,
    side: THREE.DoubleSide,
  },
}
