import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as contactMeGroupConstants } from '@/constants/contact/three/contact_me/contactMeGroupConstants.json'
import { default as meTextConstants } from '@/constants/contact/three/contact_me/texts/meTextConstants.json'

export function getMeTextDefaultValues(): TElementDefaultValues {
  return getDefaultValues(meTextConstants)
}

export function getMeTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${contactMeGroupConstants.label}+=${index! * meTextConstants.animations.stagger + 0.25}`,
    duration: contactMeGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: meTextConstants.defaultValues.position.y,
            z: meTextConstants.defaultValues.position.z,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: meTextConstants.animations.position.keyframes['step_1'].y,
            z: meTextConstants.animations.position.keyframes['step_1'].z,
          },
          easeEach: meTextConstants.animations.position.keyframes.easeEach,
        },
      },
      rotation: {
        keyframes: {
          '0%': {
            x: THREE.MathUtils.degToRad(meTextConstants.defaultValues.rotation.x),
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            x: THREE.MathUtils.degToRad(meTextConstants.animations.rotation.keyframes['step_1'].x),
          },
          easeEach: meTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '0%': {
            opacity: meTextConstants.defaultValues.material.opacity,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            opacity: meTextConstants.animations.material.keyframes['step_1'].opacity,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_2')}`]: {
            opacity: meTextConstants.animations.material.keyframes['step_2'].opacity,
          },
          easeEach: meTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
