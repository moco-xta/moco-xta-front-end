import type { TShowHideAnimation } from '@/types/animation/timelineTypes'
import type { TGroup, TMesh } from '@/types/animation/componentTypes'

export const showHideAnimation = <T extends TGroup | TMesh>({
  timeline,
  ref,
  duration,
  label,
}: TShowHideAnimation<T>): void => {
  timeline
    // VISIBILITY
    .to(
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
        duration: duration,
      },
      label,
    )
}
