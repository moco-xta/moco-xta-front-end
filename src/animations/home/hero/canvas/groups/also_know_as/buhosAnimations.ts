import { default as buhosConstants } from '@/constants/animations/home/hero/canvas/groups/also_konw_as/buhosConstants.json'

export const buhosAnimations = (buho: THREE.Mesh) => {
  return {
    material: {
      keyframes: {
        '10%': {
          opacity: buhosConstants.ANIMATION['10_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['10_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '20%': {
          opacity: buhosConstants.ANIMATION['20_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['20_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '30%': {
          opacity: buhosConstants.ANIMATION['30_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['30_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '40%': {
          opacity: buhosConstants.ANIMATION['40_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['40_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '50%': {
          opacity: buhosConstants.ANIMATION['50_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['50_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '100%': {
          opacity: buhosConstants.ANIMATION['100_PERCENT'].MATERIAL.OPACITY,
          emissiveIntensity: buhosConstants.ANIMATION['100_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        eachEase: buhosConstants.ANIMATION.EACH_EASE,
      },
    },
    visibility: {
      keyframes: {
        '0%': {
          onComplete: () => {
            buho.visible = buhosConstants.ANIMATION['0_PERCENT'].VISIBLE
          },
        },
        '100%': {
          onComplete: () => {
            buho.visible = buhosConstants.ANIMATION['100_PERCENT'].VISIBLE
          },
        },
        eachEase: buhosConstants.ANIMATION.EACH_EASE,
      },
    },
    duration: buhosConstants.DURATION,
    delay: buhosConstants.LABEL,
  }
}
