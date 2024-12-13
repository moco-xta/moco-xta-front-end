import { default as paintBucketComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/tools/paintBucketComponentAnimationsConstants.json'
import { duration } from 'moment'

export const paintBucketComponentAnimations = {
  material: {
    keyframes: {
      '0%': {
        opacity: paintBucketComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '25%': {
        opacity: paintBucketComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: paintBucketComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
    duration: paintBucketComponentAnimationsConstants.DURATION,
  },
  delay: paintBucketComponentAnimationsConstants.LABEL,
}
