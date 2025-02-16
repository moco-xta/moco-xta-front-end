import { MutableRefObject } from 'react'
import * as THREE from 'three'

import type { TElementAnimationData } from '@/types/data/animation/types'

import { default as bustConstants } from '@/constants/contact/three/bust/bustConstants.json'

export const bustDefaultValues = {
  number: 512,
  numberSquared: Math.pow(512, 2),
  factor: 125,
}

export function getBustUniforms(
  textures: THREE.Texture[],
  opacityRef: MutableRefObject<{ value: number }>,
) {
  return {
    time: {
      type: 'f',
      value: 0,
    },
    opacity: {
      type: 'f',
      value: opacityRef.current.value,
    },
    uTexture: {
      type: 't',
      value: textures[0],
    },
    mask: {
      type: 't',
      value: textures[1],
    },
    mouse: {
      type: 'v2',
      value: new THREE.Vector2(0.0, 0.0),
    },
    mousePressed: {
      type: 'f',
      value: 0,
    },
    move: {
      type: 'f',
      value: 0,
    },
  }
}

export function getBustAnimationsData(): TElementAnimationData {
  return {
    label: bustConstants.label,
    duration: bustConstants.duration,
  }
}
