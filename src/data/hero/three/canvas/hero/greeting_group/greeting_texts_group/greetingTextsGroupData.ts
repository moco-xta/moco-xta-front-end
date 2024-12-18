import * as THREE from 'three'

import { AnimatedComponentInterface } from '@/interfaces/animation'

export const greetingTextsGroupData: AnimatedComponentInterface = {
  label: 'greeting',
  duration: 1,
  default: {
    position: new THREE.Vector3(0, 0, 0),
    rotation: new THREE.Euler(
      THREE.MathUtils.degToRad(-60),
      THREE.MathUtils.degToRad(0),
      THREE.MathUtils.degToRad(0),
    ),
  },
  animations: {
    position: {
      keyframes: {
        '20%': {
          x: 2,
          y: -1,
          ease: 'back.in',
        },
        '40%': {
          x: -0.25,
          y: -0.7,
          z: 4,
          ease: 'back.in',
        },
        '60%': {
          x: 0,
          y: 1.3,
          z: 5,
          ease: 'back.in',
        },
        '80%': {
          y: 0,
          z: 0,
          ease: 'back.in',
        },
        '100%': {
          z: -3,
          ease: 'power1.in',
        },
        eachEase: 'none',
      },
    },
    rotation: {
      keyframes: {
        '20%': {
          x: THREE.MathUtils.degToRad(-15),
          y: THREE.MathUtils.degToRad(0),
          ease: 'back.in',
        },
        '40%': {
          x: THREE.MathUtils.degToRad(-15),
          y: THREE.MathUtils.degToRad(-30),
          ease: 'back.in',
        },
        '60%': {
          x: THREE.MathUtils.degToRad(-30),
          y: 0,
          ease: 'back.in',
        },
        '100%': {
          x: THREE.MathUtils.degToRad(15),
          ease: 'back.in',
        },
        easeEach: 'none',
      },
    },
  },
}
