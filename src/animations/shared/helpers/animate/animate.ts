import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type { TAnimateSignature } from '@/types/animation/three/animationsTypes'

import { default as hiTextConstants } from '@/constants/home/hero/three/greeting/texts/hiTextConstants.json'

export const animate = <T extends TGroup | TMesh>({
  timeline,
  ref,
  animationsData,
}: TAnimateSignature<T>): void => {
  const keys = Object.keys({
    position: {
      keyframes: {
        '0%': {
          x: hiTextConstants.defaultValues.position.x,
          y: hiTextConstants.defaultValues.position.y,
          z: hiTextConstants.defaultValues.position.z,
        },
        '20%': {
          x: 2,
          y: hiTextConstants.animations.position['20%'].y,
          z: hiTextConstants.animations.position['20%'].z,
          ease: hiTextConstants.animations.position['20%'].ease,
        },
        easeEach: hiTextConstants.animations.position.easeEach,
      },
    },
    material: {
      keyframes: {
        '10%': {
          opacity: hiTextConstants.defaultValues.material.opacity,
        },
        '20%': {
          opacity: hiTextConstants.animations.material['20%'].opacity,
          ease: hiTextConstants.animations.material['20%'].ease,
        },
        easeEach: hiTextConstants.animations.material.easeEach,
      },
    },
  }) as (keyof T)[]

  console.log('keys', keys)
  /* for (const key of keys) {
    timeline.to(
      ref[key],
      {
        keyframes: animationsData.animations[key]!.keyframes,
        duration: animationsData.duration,
      },
      animationsData.label,
    )
  } */
}
