import type { TDefaultValuesData, TElementData } from '@/types/animation/types'
import type { TGetAnimationsDataSignature } from '@/types/animation/helpers'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as imTextConstants } from '@/constants/home/hero/three/greeting/texts/imTextConstants.json'

export const imTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(imTextConstants),
}

export function getImTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * imTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '20%': {
            x: imTextConstants.animations.position.keyframes['step_1'].x,
            y: imTextConstants.animations.position.keyframes['step_1'].y,
            z: imTextConstants.animations.position.keyframes['step_1'].z,
          },
          '40%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            z: imTextConstants.animations.position.keyframes['step_1'].z,
          },
          easeEach: imTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '30%': {
            opacity: imTextConstants.animations.material.keyframes['step_1.5'].opacity,
          },
          '40%': {
            opacity: imTextConstants.animations.material.keyframes['step_2'].opacity,
            ease: imTextConstants.animations.material.keyframes['step_2'].ease,
          },
          easeEach: imTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
