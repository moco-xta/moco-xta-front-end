import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'
import type { TElementAnimationData } from '@/types/data/animation/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as phoneNumberGroupConstants } from '@/constants/contact/three/phone_number/phoneNumberGroupConstants.json'
import { default as phoneNumberTextConstants } from '@/constants/contact/three/phone_number/texts/phoneNumberTextConstants.json'

export function getPhoneNumberTextDefaultValues(): TElementDefaultValues {
  return getDefaultValues(phoneNumberTextConstants)
}

export function getPhoneNumberTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${phoneNumberGroupConstants.label}+=${index! * phoneNumberTextConstants.animations.stagger}`,
    duration: phoneNumberGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: phoneNumberTextConstants.defaultValues.position.y,
          },
          [`${getKeyframePosition(phoneNumberGroupConstants.duration, 'step_1')}`]: {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: phoneNumberTextConstants.animations.position.keyframes['step_1'].y,
          },
          easeEach: phoneNumberTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '0%': {
            opacity: phoneNumberTextConstants.defaultValues.material.opacity,
          },
          [`${getKeyframePosition(phoneNumberGroupConstants.duration, 'step_1')}`]: {
            opacity: phoneNumberTextConstants.animations.material.keyframes['step_1'].opacity,
          },
          [`${getKeyframePosition(phoneNumberGroupConstants.duration, 'step_2')}`]: {
            opacity: phoneNumberTextConstants.animations.material.keyframes['step_2'].opacity,
          },
          easeEach: phoneNumberTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
