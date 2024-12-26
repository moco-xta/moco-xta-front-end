// #################################
// ##  CONTEXT  ####################
// #################################

export type TGSAPTimelineContext = {
  timeline: GSAPTimeline
}

export type TGSAPTimelineProvider = {
  delay?: number
  timeScale?: number
  labels?: TLabel[]
  children: JSX.Element
}

// #################################
// ##  TIMELINE  ###################
// #################################

export type TTimelineData = {
  timeScale?: number
  delay?: number
  labels?: TLabel[]
}

// #################################
// ##  PROPERTIES  #################
// #################################

export type TPropertiesTypes =
  | 'visible'
  | 'position'
  | 'rotation'
  | 'scale'
  | 'dimensions'
  | 'material'

// #################################
// ##  CONSTANTS  ##################
// #################################

export type TConstants = {
  name: string
  label?: string
  duration?: number
  defaultValues: TDefaultValuesConstants
  animations?: TAnimationsConstants
}

// DEFAULT VALUES [CONSTANTS]

export type TDefaultValuesConstants = {
  visible: boolean
  position?: TCoordinates
  rotation?: TCoordinates
  scale?: number | TCoordinates
  dimensions?: TDimensions
  material?: TMaterial
}

// ANIMATIONS [CONSTANTS]

export type TAnimationsConstants = Partial<Record<TPropertiesTypes, TKeyframes>>

type TKeyframes = {
  keyframes: Record<
    TKeyframeKey,
    string | Record<string, string | number | boolean | TCoordinatesRange>
  >
}

// #################################
// ##  DATA  #######################
// #################################

// DEFAULT VALUES [DATA]

export type TDefaultValuesData = {
  visible: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  dimensions?: TDimensions
  material?: TMaterial
}

export type TPropertyValuesDataTypes = THREE.Vector3 | THREE.Euler | TDimensions | TMaterial

// ELEMENT [DATA]

export type TElementData = {
  label?: string
  duration: string | number
  animations?: TAnimationsData
}

// ANIMATIONS [DATA]

export type TAnimationsData = Partial<Record<TPropertiesTypes, TKeyframesData>>

export type TKeyframesData = {
  keyframes:
    | Record<TKeyframeKey, Record<string, string | number>>
    | {
        easeEach?: string
      }
}

// #################################
// ##  GLOBAL  #####################
// #################################

type TLabel = {
  name: string
  position: number | string
}

type TKeyframeKey = `step_${string}` | `${string}%` | 'easeEach'

export type TCoordinates = {
  x?: number
  y?: number
  z?: number
}

type TCoordinatesRange = {
  min: number
  max: number
  decimal?: number
}

export type TDimensions = {
  width?: number
  height?: number
  depth?: number
}

export type TMaterial = {
  transparent?: boolean
  opacity?: number
}
