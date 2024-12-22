import type { TGroup, TMesh } from '@/types/animation/three/componentsTypes'
import type { TAnimationSignature } from '@/types/animation/three/animationsTypes'

export const showHide = <T extends TGroup | TMesh>({
  timeline,
  ref,
  animationsData,
}: TAnimationSignature<T>): void => {
  timeline.to(
    ref,
    {
      keyframes: {
        '0%': {
          onComplete: () => {
            ref.visible = true
          },
        },
        '100%': {
          onComplete: () => {
            ref.visible = false
          },
        },
      },
      duration: animationsData.duration,
    },
    animationsData.label,
  )
}
