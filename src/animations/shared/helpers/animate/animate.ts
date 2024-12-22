import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type { TAnimationSignature } from '@/types/animation/three/animationsTypes'
import { TProperties } from '@/types/animation/dataTypes'

export const animate = <T extends TGroup | TMesh>({
  timeline,
  ref,
  animationsData,
}: TAnimationSignature<T>): void => {
  if (animationsData.animations) {
    for (const key of Object.keys(animationsData.animations) as (keyof TProperties<T>)[]) {
      timeline.to(
        // TODO: Try to cas 'keys'
        // @ts-ignore
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
