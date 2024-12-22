import type { TGroup } from '@/types/animation/three/componentsTypes'
import type { TAnimationsData, TDefaultValues } from '@/types/animation/dataTypes'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'

export const greetingGroupDefaultValues: TDefaultValues<TGroup> = {
  visible: greetingGroupConstants.default.visibility,
}

export function greetingGroupAnimationsData(): TAnimationsData<TGroup> {
  return {
    label: greetingGroupConstants.label,
    duration: greetingGroupConstants.duration,
  }
}
