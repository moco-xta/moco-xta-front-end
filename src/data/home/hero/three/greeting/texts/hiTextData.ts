import type { TDefaultValuesData, TElementData } from '@/types/animation/types'
import type { TGetAnimationsDataSignature } from '@/types/animation/helpers'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/animationsHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as hiTextConstants } from '@/constants/home/hero/three/greeting/texts/hiTextConstants.json'

export const hiTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(hiTextConstants),
}

/* export function getHiTextAnimationsData(index: number): TElementData {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
    animations: {
      ...getAnimationsData(greetingGroupConstants.duration, hiTextConstants),
    },
  }
} */

export function getHiTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * hiTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: '-=1',
            z: hiTextConstants.defaultValues.position.z,
          },
          '20%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: hiTextConstants.animations.position.keyframes['step_1'].y,
            z: hiTextConstants.animations.position.keyframes['step_1'].z,
            ease: hiTextConstants.animations.position.keyframes['step_1'].ease,
          },
          easeEach: hiTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '10%': {
            opacity: hiTextConstants.defaultValues.material.opacity,
          },
          '20%': {
            opacity: hiTextConstants.animations.material.keyframes['step_1'].opacity,
            ease: hiTextConstants.animations.material.keyframes['step_1'].ease,
          },
          easeEach: hiTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}