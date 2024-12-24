import * as THREE from 'three'

import type { TMesh } from '@/types/animation/three/componentsTypes'
import type {
  TDefaultValues,
  TElementData,
  TGetAnimationsDataSignature,
} from '@/types/animation/dataTypes'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as imTextConstants } from '@/constants/home/hero/three/greeting/texts/imTextConstants.json'

export const imTextDefaultValues: TDefaultValues<TMesh> = {
  keySuffix: imTextConstants.keySiffix,
  position: new THREE.Vector3(
    imTextConstants.defaultValues.position.x,
    imTextConstants.defaultValues.position.y,
    imTextConstants.defaultValues.position.z,
  ),
  material: {
    opacity: imTextConstants.defaultValues.material.opacity,
  },
}

export function getImTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementData<TMesh> {
  return {
    label: `${greetingGroupConstants.label}+=${index! * imTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '20%': {
            x: imTextConstants.animations.position['20%'].x,
            y: imTextConstants.animations.position['20%'].y,
            z: imTextConstants.animations.position['20%'].z,
          },
          '40%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            z: imTextConstants.animations.position['40%'].z,
          },
          easeEach: imTextConstants.animations.position.easeEach,
        },
      },
      material: {
        keyframes: {
          '30%': {
            opacity: imTextConstants.animations.material['30%'].opacity,
          },
          '40%': {
            opacity: imTextConstants.animations.material['40%'].opacity,
            ease: imTextConstants.animations.material['40%'].ease,
          },
          easeEach: imTextConstants.animations.material.easeEach,
        },
      },
    },
  }
}
