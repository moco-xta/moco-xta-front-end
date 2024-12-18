export const showHideAnimation = (
  timeline: GSAPTimeline,
  ref: THREE.Group | THREE.Mesh,
  duration: number,
  label: string,
) => {
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
