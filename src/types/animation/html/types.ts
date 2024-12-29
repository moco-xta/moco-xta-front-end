import { type CSSProperties } from 'react'

import type { TKeyframesData } from '../timeline/types'

// #################################
// ##  PROPERTIES  #################
// #################################

export type TPropertiesTypes = 'style'

// #################################
// ##  CONSTANTS  ##################
// #################################

export type TConstants = {
  label?: string
  duration?: number
  steps?: number
  defaultValues: TDefaultValuesConstants
  animations?: TAnimationsConstants
}

// DEFAULT VALUES [CONSTANTS]

export type TDefaultValuesConstants = {
  id: string
  className: string
  style: CSSProperties
}

// ANIMATIONS [CONSTANTS]

export type TAnimationsConstants = Partial<Record<TPropertiesTypes, TKeyframesData>>

// #################################
// ##  DATA  #######################
// #################################

// DEFAULT VALUES [DATA]

export type TDefaultValuesData = {
  id: string
  className: string
  style: CSSProperties
}

// ELEMENT [DATA]

export type TElementData = {
  label?: string
  duration: string | number
  animations?: TAnimationsData
}

// ANIMATIONS [DATA]

// export type TAnimationsData = CSSProperties
export type TAnimationsData = CSSProperties
