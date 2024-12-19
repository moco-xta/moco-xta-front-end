import { MutableRefObject } from 'react'

import { TAnimations } from '@/types/animation/types'

import { default as hiTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/hiTextAnimationsConstants.json'

export function hiTextAnimations<T extends THREE.Mesh>({
  timeline,
  ref,
  index,
}: TAnimations<T>): void {
  timeline
    // POSITION
    .to(
      ref.position,
      {
        keyframes: {
          '20%': {
            y: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
            z: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Z,
          },
          easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
        },
        duration: hiTextAnimationsConstants.DURATION,
      },
      `${hiTextAnimationsConstants.LABEL}+=${index! * hiTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
    // ROTATION
    .to(
      ref.rotation,
      {
        '10%': {
          opacity: hiTextAnimationsConstants.ANIMATION['10_PERCENT'].MATERIAL.OPACITY,
        },
        '29%': {
          opacity: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.OPACITY,
          ease: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.EASE,
        },
        easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
      },
      `${hiTextAnimationsConstants.LABEL}+=${index! * hiTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
}
