import type { TElementAnimationData } from '@/types/data/animation/types'
import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'

import { getDefaultValues, getKeyframePosition } from '@/helpers/animationHelpers'

import { default as greetingGroupConstants } from '@/constants/hero/three/greeting/greetingGroupConstants.json'
import { default as imTextConstants } from '@/constants/hero/three/greeting/texts/imTextConstants.json'

export const imTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(imTextConstants),
}

export function getImTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * imTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_1')}`]: {
            x: '-=2',
            y: imTextConstants.animations.position.keyframes['step_1'].y,
            z: '-=4',
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_2')}`]: {
            x: textLengthRef!.slice(0, index).reduce((a, b) => a + b, 0),
            z: imTextConstants.animations.position.keyframes['step_1'].z,
          },
          easeEach: imTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_1.5')}`]: {
            opacity: imTextConstants.animations.material.keyframes['step_1.5'].opacity,
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_2')}`]: {
            opacity: imTextConstants.animations.material.keyframes['step_2'].opacity,
            ease: imTextConstants.animations.material.keyframes['step_2'].ease,
          },
          easeEach: imTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
