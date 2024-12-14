import { default as lightningComponentConstants } from '@/constants/animations/home/hero/canvas/groups/also_konw_as/lightningComponentConstants.json'

export const lightningComponentAnimations = (lightningComponentMeshRef: THREE.Mesh) => {
  return {
    material: {
      keyframes: {
        '0%': {
          onComplete: () => {
            lightningComponentMeshRef.visible = true
          },
        },
        '10%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['10_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '20%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['20_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '30%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['30_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '40%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['40_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '50%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['50_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
        },
        '100%': {
          emissiveIntensity:
            lightningComponentConstants.ANIMATION['100_PERCENT'].MATERIAL.EMISSIVE_INTENSITY,
          onComplete: () => {
            lightningComponentMeshRef.visible = false
          },
        },
      },
      duration: lightningComponentConstants.DURATION,
    },
    delay: lightningComponentConstants.LABEL,
  }
}
