import type { TGroup } from '@/types/animation/three/componentsTypes'
import type { TAnimatedComponentData, TDefaultValues } from '@/types/animation/dataTypes'

import { default as greetingGroupConstants } from '@/constants/home/hero/three/greeting/greetingGroupConstants.json'

export const greetingGroupDefaultValues: TDefaultValues<TGroup> = {
  visibility: greetingGroupConstants.default.visibility,
}

export const greetingGroupData: TAnimatedComponentData<TGroup> = {
  label: greetingGroupConstants.label,
  duration: greetingGroupConstants.duration,
}
