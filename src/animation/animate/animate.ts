import * as THREE from 'three'

import type { TAnimateSignature } from '@/types/data/animation/functions/types'
import type { TProperties } from '@/types/data/animation/three/types'

// TODO: Optimize function

export const animate = ({ timeline, ref, animationsData, params }: TAnimateSignature): void => {
  if (animationsData.animations) {
    for (const key of Object.keys(animationsData.animations) as TProperties[]) {
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
              (child as any)[key],
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
          ((ref as THREE.Mesh).material as THREE.MeshStandardMaterial).color,
          {
            keyframes: animationsData?.animations?.color?.keyframes,
            duration: animationsData.duration,
          },
          animationsData.label,
        )
      } else {
        timeline.to(
          // @ts-expect-error: ref may not have the key property
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
