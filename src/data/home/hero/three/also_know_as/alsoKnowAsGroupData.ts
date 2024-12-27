import type { TElementData } from '@/types/animation/types'

import { default as alsoKnowAsGroupConstants } from '@/constants/home/hero/three/also_know_as/alsoKnowAsGroupConstants.json'

export function getAlsoKnowAsGroupAnimationsData(): TElementData {
  return {
    label: alsoKnowAsGroupConstants.label,
    duration: alsoKnowAsGroupConstants.duration,
  }
}
