import { getRandomInt } from '@/helpers/mathHelpers'

import { default as federicoTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/federicoTextAnimationsConstants.json'

export const federicoTextAnimations = (
  timeline: GSAPTimeline,
  federicoTextGroupRef: THREE.Group,
  federicoTextLengthRef: number[],
  letterRef: THREE.Mesh,
  index: number,
) => {
  timeline
    .to(
      // POSITION
      letterRef.position,
      {
        keyframes: {
          '40%': {
            x: getRandomInt({
              min: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.X.MIN,
              max: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.X.MAX,
              decimal: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.X.DECIMAL,
            }),
            z: getRandomInt({
              min: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z.MIN,
              max: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z.MAX,
              decimal: federicoTextAnimationsConstants.ANIMATION['40_PERCENT'].POSITION.Z.DECIMAL,
            }),
          },
          '60%': {
            x:
              federicoTextGroupRef.position.x +
              federicoTextLengthRef.slice(0, index).reduce((a, b) => a + b, 0),
            z: federicoTextAnimationsConstants.ANIMATION['60_PERCENT'].POSITION.Z,
          },
          easeEach: federicoTextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
        },
        duration: federicoTextAnimationsConstants.DURATION,
      },
      `${federicoTextAnimationsConstants.LABEL}+=${index * federicoTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
    // MATERIAL
    .to(
      letterRef.material,
      {
        keyframes: {
          '50%': {
            opacity: federicoTextAnimationsConstants.ANIMATION['50_PERCENT'].MATERIAL.OPACITY,
          },
          '60%': {
            opacity: federicoTextAnimationsConstants.ANIMATION['60_PERCENT'].MATERIAL.OPACITY,
            ease: federicoTextAnimationsConstants.ANIMATION['60_PERCENT'].MATERIAL.EASE,
          },
          easeEach: federicoTextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: federicoTextAnimationsConstants.DURATION,
      },
      `${federicoTextAnimationsConstants.LABEL}+=${index * federicoTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
}
