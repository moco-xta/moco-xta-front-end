import { default as directionalLightsConstants } from '@/constants/animations/home/hero/canvas/lights/directionalLightsConstants.json'

export const directionalLightsAnimations = (
  timeline: GSAPTimeline,
  directionLightRef: THREE.DirectionalLight,
) => {
  timeline.to(
    directionLightRef,
    {
      keyframes: {
        '0%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['0_PERCENT'].INTENSITY,
        },
        '10%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['10_PERCENT'].INTENSITY,
        },
        '20%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['20_PERCENT'].INTENSITY,
        },
        '30%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['30_PERCENT'].INTENSITY,
        },
        '40%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['40_PERCENT'].INTENSITY,
        },
        '50%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['50_PERCENT'].INTENSITY,
        },
        '100%': {
          intensity:
            directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION['100_PERCENT'].INTENSITY,
        },
        easeEach: directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.ANIMATION.EASE_EACH,
      },
      duration: directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.DURATION,
    },
    directionalLightsConstants.ANIMATIONS.ALSO_KNOW_AS.LABEL,
  )
}
