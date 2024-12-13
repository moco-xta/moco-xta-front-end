import { default as logoAthleticoNacionalComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/logoAthleticoNacionalComponentAnimationsConstants.json'

export const logoAthleticoNacionalComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity:
          logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity:
          logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL
            .OPACITY,
      },
      easeEach: logoAthleticoNacionalComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: logoAthleticoNacionalComponentAnimationsConstants.DURATION,
  },
  delay: logoAthleticoNacionalComponentAnimationsConstants.LABEL,
}
