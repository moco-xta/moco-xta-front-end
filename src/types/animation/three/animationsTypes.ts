import { TGroup, TMesh } from './componentsTypes'
import type { TAnimationsData } from '../dataTypes'

export type TAnimationSignature<T extends TGroup | TMesh> = {
  timeline: GSAPTimeline
  ref: T
  animationsData: TAnimationsData<T>
}
