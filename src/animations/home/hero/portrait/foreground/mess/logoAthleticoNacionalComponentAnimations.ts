import { default as logoAthleticoNacionalComponentConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

export const logoAthleticoNacionalComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: logoAthleticoNacionalComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: logoAthleticoNacionalComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: logoAthleticoNacionalComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: logoAthleticoNacionalComponentConstants.DURATION,
  },
  delay: logoAthleticoNacionalComponentConstants.LABEL,
}
