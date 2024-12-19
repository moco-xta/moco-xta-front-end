import type { TGroup } from '@/types/animation/componentTypes'
import type { TAnimate } from '@/types/animation/timelineTypes'
import type { TMeshProperties, TProperties } from '@/types/animation/propertiesTypes'

export const animateGroup = <T extends TGroup>({
  timeline,
  ref,
  animations,
  duration,
  label,
}: TAnimate<T>): void => {
  const animationsKeys = Object.keys(animations) as (keyof TProperties)[]
  for (const key of animationsKeys) {
    timeline.to(
      ref[key],
      {
        keyframes: animations[key]!.keyframes,
        duration: duration,
      },
      label,
    )
  }
}

export const animateMesh = <T extends THREE.Mesh>({
  timeline,
  ref,
  animations,
  duration,
  label,
}: TAnimate<T>): void => {
  const animationsKeys = Object.keys(animations) as (keyof TMeshProperties)[]
  for (const key of animationsKeys) {
    timeline.to(
      ref[key],
      {
        keyframes: animations[key]!.keyframes,
        duration: duration,
      },
      label,
    )
  }
}
