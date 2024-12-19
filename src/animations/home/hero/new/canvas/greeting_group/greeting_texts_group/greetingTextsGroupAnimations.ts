import { greetingTextsGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greeting_texts_group/greetingTextsGroupData'
import { TGroup } from '@/types/animation/componentTypes'
import { TAnimate } from '@/types/animation/timelineTypes'

export function greetingTextsGroupAnimations({ timeline, ref }: TAnimate<TGroup | THREE.Mesh>) {
  const objKeys = Object.keys(greetingTextsGroupData.animations) as (
    | keyof TGroup
    | keyof THREE.Mesh
  )[]
  for (const key of objKeys) {
    timeline.to(
      ref[key],
      {
        keyframes: greetingTextsGroupData.animations[key].keyframes,
        duration: greetingTextsGroupData.duration,
      },
      greetingTextsGroupData.label,
    )
  }
}
