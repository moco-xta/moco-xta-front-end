import type { TGroup, TMesh } from '@/types/animation/componentTypes'
import type { TAnimate } from '@/types/animation/timelineTypes'
import type { TProperties } from '@/types/animation/propertiesTypes'

export const animateGeometry = <T extends TGroup | TMesh>({
  timeline,
  ref,
  animations,
  duration,
  label,
}: TAnimate<T>): void => {
  const animationsKeys = Object.keys(animations) as (keyof Omit<TProperties, 'material'>)[]
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

export const animateMesh = <T extends TMesh>({
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

/* export const animateGroup = <T extends TGroup>({
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

export const animateMesh = <T extends TMesh>({
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
} */
