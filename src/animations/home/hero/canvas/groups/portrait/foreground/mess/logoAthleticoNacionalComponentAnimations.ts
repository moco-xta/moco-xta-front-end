import { default as logoAthleticoNacionalComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

export const logoAthleticoNacionalComponentAnimations = (
  timeline: GSAPTimeline,
  logoAthleticoNacionalComponentMeshRef: THREE.Mesh,
) => {
  timeline
    // MATERIAL
    .to(
      logoAthleticoNacionalComponentMeshRef.material,
      {
        keyframes: {
          '25%': {
            opacity:
              logoAthleticoNacionalComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
          },
          easeEach: logoAthleticoNacionalComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
        },
        duration: logoAthleticoNacionalComponentConstants.DURATION,
      },
      logoAthleticoNacionalComponentConstants.LABEL,
    )
}
