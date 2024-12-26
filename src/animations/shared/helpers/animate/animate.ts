import type { TAnimateSignature } from '@/types/animation/helpers'
import { TPropertiesTypes } from '@/types/animation/types'

export const animate = ({ timeline, ref, animationsData }: TAnimateSignature): void => {
  if (animationsData.animations) {
    for (const key of Object.keys(animationsData.animations) as TPropertiesTypes[]) {
      timeline.to(
        // TODO: Try to cast 'keys'
        // @ts-ignore
        // ref[key] as unknown as TweenTarget,
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
