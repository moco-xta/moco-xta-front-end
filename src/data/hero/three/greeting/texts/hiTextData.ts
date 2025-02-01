import type { TElementAnimationData } from '@/types/data/animation/types'
import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'

import { getDefaultValues } from '@/helpers/animation/getDefaultValues'
import { getKeyframePosition } from '@/helpers/animationHelpers'

import { default as greetingGroupConstants } from '@/constants/hero/three/greeting/greetingGroupConstants.json'
import { default as hiTextConstants } from '@/constants/hero/three/greeting/texts/hiTextConstants.json'

export const hiTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(hiTextConstants),
}

export function getHiTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * hiTextConstants.animations.stagger}`,
    duration: hiTextConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            y: '-=0.75',
            z: hiTextConstants.defaultValues.position.z,
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_1')}`]: {
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
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_0.5')}`]: {
            opacity: hiTextConstants.defaultValues.material.opacity,
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_1')}`]: {
            opacity: hiTextConstants.animations.material.keyframes['step_1'].opacity,
            ease: hiTextConstants.animations.material.keyframes['step_1'].ease,
          },
          easeEach: hiTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
