import { greetingGroupData } from '@/data/hero/three/canvas/hero/greeting_group/greetingGroupData'
import { AnimationsInterface } from '@/interfaces/animation'

export const greetingGroupAnimations = () => {
  const animations: AnimationsInterface = {
    visibility: {
      duration: greetingGroupData.duration,
      label: greetingGroupData.label,
    },
  }
  return animations
}
