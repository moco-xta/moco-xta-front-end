import * as THREE from 'three'

import type { TText3DData } from '@/types/data/components/three/types'

import { default as alsoKnowAsTextsConstants } from '@/constants/hero/three/also_know_as/texts/alsoKnowAsTextsConstants.json'

export const getAlsoKnowAsTextsDefaultValues: TText3DData = {
  geometry: {
    font: alsoKnowAsTextsConstants.geometry.font,
    // size: alsoKnowAsTextsConstants.geometry.size,
    // depth: alsoKnowAsTextsConstants.geometry.depth,
    center: alsoKnowAsTextsConstants.geometry.center,
    spaceWidth: alsoKnowAsTextsConstants.geometry.spaceWidth,
  },
  material: {
    color: alsoKnowAsTextsConstants.material.color,
    roughness: alsoKnowAsTextsConstants.material.roughness,
    transparent: alsoKnowAsTextsConstants.material.transparent,
    opacity: alsoKnowAsTextsConstants.material.opacity,
    emissive: alsoKnowAsTextsConstants.material.emissive,
    emissive_intensity: alsoKnowAsTextsConstants.material.emissive_intensity,
    wireframe: alsoKnowAsTextsConstants.material.wireframe,
    side: THREE.DoubleSide,
  },
}
