import type { TGroup, TMesh } from './componentsTypes'
import type { TElementData } from '../dataTypes'

export type TAnimationSignature<T extends TGroup | TMesh> = {
  timeline: GSAPTimeline
  ref: T
  animationsData: TElementData<T>
  variables?: Record<string, number>
}
