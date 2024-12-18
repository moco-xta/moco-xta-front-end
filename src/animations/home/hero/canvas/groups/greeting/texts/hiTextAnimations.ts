import { default as hiTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/hiTextAnimationsConstants.json'

export const hiTextAnimations = (timeline: GSAPTimeline, letterRef: THREE.Mesh, index: number) => {
  timeline
    // POSITION
    .to(
      letterRef.position,
      {
        keyframes: {
          '20%': {
            y: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
            z: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Z,
          },
          easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
        },
        duration: hiTextAnimationsConstants.DURATION,
      },
      `${hiTextAnimationsConstants.LABEL}+=${index * hiTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
    // MATERIAL
    .to(
      letterRef.material,
      {
        keyframes: {
          '10%': {
            opacity: hiTextAnimationsConstants.ANIMATION['10_PERCENT'].MATERIAL.OPACITY,
          },
          '29%': {
            opacity: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.OPACITY,
            ease: hiTextAnimationsConstants.ANIMATION['20_PERCENT'].MATERIAL.EASE,
          },
          easeEach: hiTextAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: hiTextAnimationsConstants.DURATION,
      },
      `${hiTextAnimationsConstants.LABEL}+=${index * hiTextAnimationsConstants.ANIMATION.STAGGER}`,
    )
}
