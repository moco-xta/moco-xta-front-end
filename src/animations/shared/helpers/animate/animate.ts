import type { TAnimateSignature } from '@/types/animation/helpers'
import type { TPropertiesTypes } from '@/types/animation/types'

// TODO: Optimize function

export const animate = ({ timeline, ref, animationsData, params }: TAnimateSignature): void => {
  if (animationsData.animations) {
    for (const key of Object.keys(animationsData.animations) as TPropertiesTypes[]) {
      if (params?.elementsArray) {
        ref.children.forEach((child) => {
          if (key === 'material' && params?.withMaterialsArray) {
            child.children.forEach((child) => {
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
              // @ts-ignore
              child[key],
              {
                keyframes: animationsData?.animations?.material?.keyframes,
                duration: animationsData.duration,
              },
              animationsData.label,
            )
          }
        })
      } else if (key === 'material' && params?.withMaterialsArray) {
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
      } else if (key === 'color') {
        timeline.to(
          // @ts-ignore
          (ref as THREE.Mesh).material.color,
          {
            keyframes: animationsData?.animations?.color?.keyframes,
            duration: animationsData.duration,
          },
          animationsData.label,
        )
      } else {
        timeline.to(
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
}
