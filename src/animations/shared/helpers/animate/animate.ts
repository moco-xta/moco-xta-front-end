import type { TAnimateSignature } from '@/types/animation/helpers'
import type { TPropertiesTypes } from '@/types/animation/types'

export const animate = ({
  timeline,
  ref,
  animationsData,
  withMaterialsArray,
}: TAnimateSignature): void => {
  if (animationsData.animations) {
    for (const key of Object.keys(animationsData.animations) as TPropertiesTypes[]) {
      if (key === 'material' && withMaterialsArray) {
        ref.children.forEach((child) => {
          timeline.to(
            (child as THREE.Mesh).material,
            {
              keyframes: animationsData?.animations?.material?.keyframes,
              duration: animationsData.duration,
            },
            animationsData.label,
          )
        })
      } else {
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
}
