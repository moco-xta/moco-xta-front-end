import * as THREE from 'three'

import { TMesh } from '@/types/animation/componentTypes'

import { TAnimatedComponentData } from '@/types/animation/dataTypes'

export const hiTextData: TAnimatedComponentData<TMesh> = {
  label: 'greeting',
  duration: 5,
  defaultValues: {
    position: new THREE.Vector3(-2.2, 0, 0),
    material: {
      opacity: 0,
    },
  },
  animations: {
    position: {
      keyframes: {
        '20%': {
          x: 0,
          y: -1.6,
          z: 0,
          ease: 'back.in',
        },
        easeEach: 'none',
      },
    },
    material: {
      keyframes: {
        '10%': {
          opacity: 0,
        },
        '20%': {
          opacity: 1,
        },
        easeEach: 'power1.in',
      },
    },
    stagger: 0.125,
  },
}
