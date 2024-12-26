import type { TDefaultValuesData, TElementData } from '@/types/animation/types'
import type { TGetAnimationsDataSignature } from '@/types/animation/helpers'

import { getDefaultValues } from '@/helpers/animations/animationsHelpers'
import { getRandomInt } from '@/helpers/mathHelpers'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'
import { default as federicoTextConstants } from '@/constants/home/hero/three/greeting/texts/federicoTextConstants.json'

export const getFedericoTextDefaultValues: TDefaultValuesData = {
  ...getDefaultValues(federicoTextConstants),
}

export function getFedericoTextAnimationsData({
  textLengthRef,
  index,
}: TGetAnimationsDataSignature): TElementData {
  return {
    label: `${greetingGroupConstants.label}+=${index! * federicoTextConstants.animations.stagger}`,
    duration: greetingGroupConstants.duration,
    animations: {
      position: {
        keyframes: {
          '0%': {
            y: federicoTextConstants.defaultValues.position.y,
          },
          '40%': {
            x: getRandomInt({
              min: federicoTextConstants.animations.position.keyframes['step_2'].x.min,
              max: federicoTextConstants.animations.position.keyframes['step_2'].x.max,
              decimal: federicoTextConstants.animations.position.keyframes['step_2'].x.decimal,
            }),
            z: getRandomInt({
              min: federicoTextConstants.animations.position.keyframes['step_2'].z.min,
              max: federicoTextConstants.animations.position.keyframes['step_2'].z.max,
              decimal: federicoTextConstants.animations.position.keyframes['step_2'].z.decimal,
            }),
          },
          '60%': {
            x: /* textGroupRef!.position.x +  */ textLengthRef!
              .slice(0, index)
              .reduce((a, b) => a + b, 0),
            z: federicoTextConstants.animations.position.keyframes['step_3'].z,
          },
          easeEach: federicoTextConstants.animations.position.keyframes.easeEach,
        },
      },
      material: {
        keyframes: {
          '50%': {
            opacity: federicoTextConstants.animations.material.keyframes['step_2'].opacity,
          },
          '60%': {
            opacity: federicoTextConstants.animations.material.keyframes['step_3'].opacity,
            ease: federicoTextConstants.animations.material.keyframes['step_3'].ease,
          },
          easeEach: federicoTextConstants.animations.material.keyframes.easeEach,
        },
      },
    },
  }
}
