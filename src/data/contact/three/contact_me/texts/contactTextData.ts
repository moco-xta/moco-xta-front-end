import * as THREE from 'three'

import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as contactMeGroupConstants } from '@/constants/contact/three/contact_me/contactMeGroupConstants.json'
import { default as contactTextConstants } from '@/constants/contact/three/contact_me/texts/contactTextConstants.json'

export function getContactTextDefaultValues(): TElementDefaultValues {
  return getDefaultValues(contactTextConstants)
}

export function getContactTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${contactMeGroupConstants.label}+=${index! * contactTextConstants.animations.stagger}`,
    duration: contactMeGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: contactTextConstants.defaultValues.position.y,
            z: contactTextConstants.defaultValues.position.z,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: contactTextConstants.animations.position.keyframes['step_1'].y,
            z: contactTextConstants.animations.position.keyframes['step_1'].z,
          },
          easeEach: contactTextConstants.animations.position.keyframes.easeEach,
        },
      },
      rotation: {
        keyframes: {
          '0%': {
            x: THREE.MathUtils.degToRad(contactTextConstants.defaultValues.rotation.x),
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            x: THREE.MathUtils.degToRad(
              contactTextConstants.animations.rotation.keyframes['step_1'].x,
            ),
          },
          easeEach: contactTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '0%': {
            opacity: contactTextConstants.defaultValues.material.opacity,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_1')}`]: {
            opacity: contactTextConstants.animations.material.keyframes['step_1'].opacity,
          },
          [`${getKeyframePosition(contactMeGroupConstants.duration, 'step_2')}`]: {
            opacity: contactTextConstants.animations.material.keyframes['step_2'].opacity,
          },
          easeEach: contactTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
