import { default as skyComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/skyComponentAnimationsConstants.json'

export const skyComponentAnimations = {
  position: {
    keyframes: {
      '0%': {
        y: skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
      },
      '33%': {
        y: skyComponentAnimationsConstants.ANIMATION['20_PERCENT'].POSITION.Y,
      },
      easeEach: skyComponentAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
    },
  },
  color: {
    keyframes: {
      '0%': {
        r: skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.R,
        g: skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.G,
        b: skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].COLOR.B,
      },
      '40%': {
        r: skyComponentAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.R,
        g: skyComponentAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.G,
        b: skyComponentAnimationsConstants.ANIMATION['40_PERCENT'].COLOR.B,
      },
      '60%': {
        r: skyComponentAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.R,
        g: skyComponentAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.G,
        b: skyComponentAnimationsConstants.ANIMATION['60_PERCENT'].COLOR.B,
      },
      easeEach: 'power1.in',
    },
  },
  material: {
    keyframes: {
      '0%': {
        opacity: skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: skyComponentAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: skyComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
  },
  duration: skyComponentAnimationsConstants.DURATION,
  delay: skyComponentAnimationsConstants.LABEL,
}
