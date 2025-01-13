import type { TAnimationSignature } from '@/types/data/animation/functions/types'

export const showHide = ({ timeline, ref, animationsData }: TAnimationSignature): void => {
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
