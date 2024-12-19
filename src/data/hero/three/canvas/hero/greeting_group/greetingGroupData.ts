import type { TGroup } from '@/types/animation/componentTypes'
import { TAnimatedComponentData } from '@/types/animation/dataTypes'

import { default as greetingGroupConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/greetingGroupConstants.json'

export const greetingGroupData: TAnimatedComponentData<TGroup> = {
  label: greetingGroupConstants.LABEL,
  duration: greetingGroupConstants.DURATION,
  defaultValues: {
    visibility: greetingGroupConstants.DEFAULT.VISIBILITY,
  },
}
