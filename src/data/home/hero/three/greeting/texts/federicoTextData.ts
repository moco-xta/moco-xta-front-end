import * as THREE from 'three'

import type { TMesh } from '@/types/animation/three/componentsTypes'
import type {
  TAnimationsData,
  TDefaultValues,
  TGetAnimationsDataSignature,
} from '@/types/animation/dataTypes'

import { getRandomInt } from '@/helpers/mathHelpers'

import { default as federicoTextConstants } from '@/constants/home/hero/three/greeting/texts/federicoTextConstants.json'

export const federicoTextDefaultValues: TDefaultValues<TMesh> = {
  keySuffix: federicoTextConstants.keySiffix,
  position: !federicoTextConstants.defaultValues.position
    ? new THREE.Vector3()
    : new THREE.Vector3(
        federicoTextConstants.defaultValues.position.x,
        federicoTextConstants.defaultValues.position.y,
        federicoTextConstants.defaultValues.position.z,
      ),
  material: {
    opacity: federicoTextConstants.defaultValues.material.opacity,
  },
}

export function getFedericoTextAnimationsData({
  textGroupRef,
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TAnimationsData<TMesh> {
  return {
    label: `${federicoTextConstants.label}+=${index! * federicoTextConstants.animations.stagger}`,
    duration: federicoTextConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            y: federicoTextConstants.defaultValues.position.y,
          },
          '40%': {
            x: getRandomInt({
              min: federicoTextConstants.animations.position['40%'].x.min,
              max: federicoTextConstants.animations.position['40%'].x.max,
              decimal: federicoTextConstants.animations.position['40%'].x.decimal,
            }),
            z: getRandomInt({
              min: federicoTextConstants.animations.position['40%'].z.min,
              max: federicoTextConstants.animations.position['40%'].z.max,
              decimal: federicoTextConstants.animations.position['40%'].z.decimal,
            }),
          },
          '60%': {
            x: textGroupRef!.position.x + textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            z: federicoTextConstants.animations.position['60%'].z,
          },
          easeEach: federicoTextConstants.animations.position.easeEach,
        },
      },
      material: {
        keyframes: {
          '50%': {
            opacity: federicoTextConstants.animations.material['50%'].opacity,
          },
          '60%': {
            opacity: federicoTextConstants.animations.material['60%'].opacity,
            ease: federicoTextConstants.animations.material['60%'].ease,
          },
          easeEach: federicoTextConstants.animations.material.easeEach,
        },
      },
    },
  }
}
