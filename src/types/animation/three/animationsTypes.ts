import { TGroup, TMesh } from './componentsTypes'
import type { TAnimationsData } from '../dataTypes'

// ANIMATE

export type TAnimateSignature<T extends TGroup | TMesh> = {
  timeline: GSAPTimeline
  ref: T
  animationsData: TAnimationsData<T>
}

// SHOW/HIDE

// export type TShowHideSignature<T> = Omit<TAnimateSignature<T>, 'animations'>
