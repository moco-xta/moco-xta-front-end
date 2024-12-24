import * as THREE from 'three'

import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type {
  TDefaultValues,
  TElementData,
  TGetAnimationsDataSignature,
} from '@/types/animation/dataTypes'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as hiTextConstants } from '@/constants/home/hero/three/greeting/texts/hiTextConstants.json'

/* export const hiTextDefaultValues: TDefaultValues<TGroup> = {
  ...getDefaultValues(hiTextConstants),
} */

export const hiTextDefaultValues: TDefaultValues<TMesh> = {
  keySuffix: hiTextConstants.keySiffix,
  position: !hiTextConstants.defaultValues.position
    ? new THREE.Vector3()
    : new THREE.Vector3(
        hiTextConstants.defaultValues.position.x,
        hiTextConstants.defaultValues.position.y,
        hiTextConstants.defaultValues.position.z,
      ),
  material: {
    opacity: hiTextConstants.defaultValues.material.opacity,
  },
}

/* export function getHiTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementData<TMesh> {
  return {
    label: `${greetingGroupConstants.label}+=${index! * hiTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: hiTextConstants.defaultValues.position.x,
            y: hiTextConstants.defaultValues.position.y,
            z: hiTextConstants.defaultValues.position.z,
          },
          '20%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: hiTextConstants.animations.position['20%'].y,
            z: hiTextConstants.animations.position['20%'].z,
            ease: hiTextConstants.animations.position['20%'].ease,
          },
          easeEach: hiTextConstants.animations.position.easeEach,
        },
      },
      material: {
        keyframes: {
          '10%': {
            opacity: hiTextConstants.defaultValues.material.opacity,
          },
          '20%': {
            opacity: hiTextConstants.animations.material['20%'].opacity,
            ease: hiTextConstants.animations.material['20%'].ease,
          },
          easeEach: hiTextConstants.animations.material.easeEach,
        },
      },
    },
  }
} */
