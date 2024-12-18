import { AnimationsInterface } from '@/interfaces/animation'

import { greetingTextsGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greeting_texts_group/greetingTextsGroupData'

export const greetingTextsGroupAnimations = (
  timeline: GSAPTimeline,
  greetingTextGroupRef: THREE.Group,
) => {
  timeline
    // POSITION
    .to(
      greetingTextGroupRef.position,
      {
        keyframes: {
          '20%': {
            x: greetingTextsGroupData.ANIMATION['20_PERCENT'].POSITION.X,
            y: greetingTextsGroupData.ANIMATION['20_PERCENT'].POSITION.Y,
            ease: greetingTextsGroupData.ANIMATION['20_PERCENT'].POSITION.EASE,
          },
          '40%': {
            x: greetingTextsGroupData.ANIMATION['40_PERCENT'].POSITION.X,
            y: greetingTextsGroupData.ANIMATION['40_PERCENT'].POSITION.Y,
            z: greetingTextsGroupData.ANIMATION['40_PERCENT'].POSITION.Z,
            ease: greetingTextsGroupData.ANIMATION['40_PERCENT'].POSITION.EASE,
          },
          '60%': {
            x: greetingTextsGroupData.ANIMATION['60_PERCENT'].POSITION.X,
            y: greetingTextsGroupData.ANIMATION['60_PERCENT'].POSITION.Y,
            z: greetingTextsGroupData.ANIMATION['60_PERCENT'].POSITION.Z,
            ease: greetingTextsGroupData.ANIMATION['60_PERCENT'].POSITION.EASE,
          },
          '80%': {
            y: greetingTextsGroupData.ANIMATION['80_PERCENT'].POSITION.Y,
            z: greetingTextsGroupData.ANIMATION['80_PERCENT'].POSITION.Z,
            ease: greetingTextsGroupData.ANIMATION['80_PERCENT'].POSITION.EASE,
          },
          '100%': {
            z: greetingTextsGroupData.ANIMATION['100_PERCENT'].POSITION.Z,
            ease: greetingTextsGroupData.ANIMATION['100_PERCENT'].POSITION.EASE,
          },
        },
        duration: greetingTextsGroupAnimations.duration,
      },
      greetingTextsGroupAnimations.delay,
    )
    // ROTATION
    .to(
      greetingTextGroupRef.current.rotation,
      {
        keyframes: greetingTextsGroupAnimations.rotation.keyframes,
        duration: greetingTextsGroupAnimations.duration,
      },
      greetingTextsGroupAnimations.delay,
    )
  const animations: AnimationsInterface = {
    position: {
      keyframes: greetingTextsGroupData.animations!.position!.keyframes,
      duration: greetingTextsGroupData.duration,
    },
    rotation: {
      keyframes: greetingTextsGroupData.animations!.rotation!.keyframes,
      duration: greetingTextsGroupData.duration,
    },
    label: greetingTextsGroupData.label,
  }
  return animations
}
