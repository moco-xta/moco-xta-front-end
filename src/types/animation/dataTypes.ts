import type { TGroup, TMesh } from './three/componentsTypes'
import { TDimensionsData } from './three/dataTypes'

// CONSTANTS

export type TConstantsData<T extends TGroup | TMesh> = {
  defaultValues: Partial<Record<keyof T, Record<string, string | number | boolean>>>
  animations?: Partial<
    Record<keyof T, Record<string, string | Record<string, string | number | boolean>>>
  >
}

// TIMELINE

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabel[]
}

type TLabel = {
  name: string
  position?: number | string
}

// DEFAULT VALUES

export type TDefaultValues<T extends TGroup | TMesh> = {
  keySuffix?: string
} & Omit<Partial<T>, 'material'> & {
    material?: Partial<THREE.Material>
    dimensions?: TDimensionsData
  }

// ANIMATION

export type TElementData<T extends TGroup | TMesh> = {
  label?: string
  duration: string | number
  animations?: TAnimationsData<T>
}

export type TAnimationsData<T> = Partial<Record<keyof T, TKeyframesData>>

export type TKeyframesData = {
  keyframes: Record<string, string | Record<string, string | number>> & {
    easeEach?: string
  }
}

export type TGetAnimationsDataSignature = {
  index?: number
  textGroupRef?: TGroup
  textLengthRef?: number[]
}

// PROPERTIES

export type TProperties<T extends TGroup | TMesh> = Record<keyof T, string>
