import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as contactMeTextsConstants } from '@/constants/contact/three/contact_me/texts/contactMeTextsConstants.json'

export const contactMeTextsDefaultValues: TText3DData = {
  geometry: {
    font: contactMeTextsConstants.geometry.font,
    // size: contactMeTextsConstants.geometry.size,
    // depth: contactMeTextsConstants.geometry.depth,
    center: contactMeTextsConstants.geometry.center,
    spaceWidth: contactMeTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: contactMeTextsConstants.material.color,
    transparent: contactMeTextsConstants.material.transparent,
    opacity: contactMeTextsConstants.material.opacity,
    side: THREE.DoubleSide,
  },
}
