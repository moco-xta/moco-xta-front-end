import { default as skyComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/skyComponentConstants.json'

export const skyComponentAnimations = {
  position: {
    keyframes: {
      '0%': {
        y: skyComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
      },
      '33%': {
        y: skyComponentConstants.ANIMATION['20_PERCENT'].POSITION.Y,
      },
      easeEach: skyComponentConstants.ANIMATION.EACH_EASE.POSITION,
    },
  },
  color: {
    keyframes: {
      '0%': {
        r: skyComponentConstants.ANIMATION['0_PERCENT'].COLOR.R,
        g: skyComponentConstants.ANIMATION['0_PERCENT'].COLOR.G,
        b: skyComponentConstants.ANIMATION['0_PERCENT'].COLOR.B,
      },
      '40%': {
        r: skyComponentConstants.ANIMATION['40_PERCENT'].COLOR.R,
        g: skyComponentConstants.ANIMATION['40_PERCENT'].COLOR.G,
        b: skyComponentConstants.ANIMATION['40_PERCENT'].COLOR.B,
      },
      '60%': {
        r: skyComponentConstants.ANIMATION['60_PERCENT'].COLOR.R,
        g: skyComponentConstants.ANIMATION['60_PERCENT'].COLOR.G,
        b: skyComponentConstants.ANIMATION['60_PERCENT'].COLOR.B,
      },
      easeEach: 'power1.in',
    },
  },
  material: {
    keyframes: {
      '0%': {
        opacity: skyComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
      },
      '33%': {
        opacity: skyComponentConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
      },
      easeEach: skyComponentConstants.ANIMATION.EACH_EASE.MATERIAL,
    },
  },
  duration: skyComponentConstants.DURATION,
  delay: skyComponentConstants.LABEL,
}
