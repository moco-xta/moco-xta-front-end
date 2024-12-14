import { default as paintBucketComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/tools/paintBucketComponentConstants.json'
import { duration } from 'moment'

export const paintBucketComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: paintBucketComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: paintBucketComponentConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: paintBucketComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: paintBucketComponentConstants.DURATION,
  },
  delay: paintBucketComponentConstants.LABEL,
}
