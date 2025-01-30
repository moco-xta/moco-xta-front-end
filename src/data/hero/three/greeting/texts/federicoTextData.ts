import type { TElementAnimationData } from '@/types/data/animation/types'
import type { TElementDefaultValues } from '@/types/data/animation/three/types'
import type { TGetAnimationsDataSignature } from '@/types/data/animation/functions/types'

import { getDefaultValues, getKeyframePosition } from '@/helpers/animationHelpers'
import { getRandomInt, randomPositiveOrNegative } from '@/helpers/mathHelpers'

import { default as greetingGroupConstants } from '@/constants/hero/three/greeting/greetingGroupConstants.json'
import { default as federicoTextConstants } from '@/constants/hero/three/greeting/texts/federicoTextConstants.json'

export const federicoTextDefaultValues: TElementDefaultValues = {
  ...getDefaultValues(federicoTextConstants),
}

export function getFedericoTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementAnimationData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * federicoTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            // x: '-=2',
            y: federicoTextConstants.defaultValues.position.y,
            // z: '-=4',
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_1.5')}`]: {
            x:
              getRandomInt({
                min: federicoTextConstants.animations.position.keyframes['step_1.5'].x.min,
                max: federicoTextConstants.animations.position.keyframes['step_1.5'].x.max,
                decimal: federicoTextConstants.animations.position.keyframes['step_1.5'].x.decimal,
              }) * randomPositiveOrNegative(),
            z: getRandomInt({
              min: federicoTextConstants.animations.position.keyframes['step_1.5'].z.min,
              max: federicoTextConstants.animations.position.keyframes['step_1.5'].z.max,
              decimal: federicoTextConstants.animations.position.keyframes['step_1.5'].z.decimal,
            }),
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_3.5')}`]: {
            x: /* textGroupRef!.position.x +  */ textLengthRef!
              .slice(0, index)
              .reduce((a, b) => a + b, 0),
            z: federicoTextConstants.animations.position.keyframes['step_3.5'].z,
          },
          easeEach: federicoTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_2.5')}`]: {
            opacity: federicoTextConstants.animations.material.keyframes['step_2.5'].opacity,
          },
          [`${getKeyframePosition(greetingGroupConstants.duration, 'step_3.5')}`]: {
            opacity: federicoTextConstants.animations.material.keyframes['step_3.5'].opacity,
            ease: federicoTextConstants.animations.material.keyframes['step_3.5'].ease,
          },
          easeEach: federicoTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
