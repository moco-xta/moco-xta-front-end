import { MutableRefObject } from 'react'

import type { TElementData } from '@/types/animation/html/types'

import { getAnimationsData, getDefaultValues } from '@/helpers/animations/html/animationHelpers'

import { default as heroSliceConstants } from '@/constants/home/hero/heroSliceConstants.json'

export const heroSliceDefaultValues = {
  ...getDefaultValues(heroSliceConstants),
}

export function getHeroSliceAnimationsData(ref: MutableRefObject<HTMLElement>): TElementData {
  return {
    label: heroSliceConstants.label,
    duration: heroSliceConstants.duration,
    animations: {
      ...getAnimationsData(heroSliceConstants, {
        style: {
          step_10: {
            onComplete: () => {
              ref.current.style.background = 'unset!important'
              ref.current.style.backgroundImage = 'unset!important'
              ref.current.style.background = '#000!important'
              console.log('ref', ref)
            },
          },
        },
      }),
    },
  }
}
