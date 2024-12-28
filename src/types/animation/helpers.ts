import { TElementData } from './types'

export type TGetAnimationsDataSignature = {
  index?: number
  textGroupRef?: THREE.Group
  textLengthRef?: number[]
}

export type TAnimateSignature = {
  timeline: GSAPTimeline
  ref: THREE.Group | THREE.Mesh
  animationsData: TElementData
  params?: {
    withMaterialsArray?: boolean
    elementsArray?: boolean
  }
}
