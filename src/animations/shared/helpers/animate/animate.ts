import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type { TAnimationSignature } from '@/types/animation/three/animationsTypes'

export const animate = <T extends TGroup | TMesh>({
  timeline,
  ref,
  animationsData,
}: TAnimationSignature<T>): void => {
  if (animationsData.animations) {
    const animationsKeys = Object.keys(animationsData.animations) as (keyof T)[]
    for (const key of animationsKeys) {
      timeline.to(
        ref[key],
        {
          keyframes: animationsData!.animations[key]!.keyframes,
          duration: animationsData.duration,
        },
        animationsData.label,
      )
    }
  }
}
