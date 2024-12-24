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

// PROPERTIES

export type TPropertiesTypes =
  | 'visible'
  | 'position'
  | 'rotation'
  | 'scale'
  | 'dimensions'
  | 'material'

// CONSTANTS

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
  scale?: TCoordinates
  dimensions?: TDimensions
  material?: TMaterial
}

// ANIMATIONS [CONSTANTS]

export type TAnimationsConstants = Partial<Record<TPropertiesTypes, { 
  keyframes: Record<TKeyframeKey, string | number | boolean>
}>>

// DATA

// DEFAULT VALUES [DATA]

export type TDefaultValuesData = {
  visible: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  dimensions?: TDimensions
  material?: TMaterial
}

// ELEMENT [DATA]

export type TElementData = {
  label?: string
  duration: string | number
  animations?: TAnimationsData
}

// ANIMATIONS [DATA]

export type TAnimationsData = Record<TPropertiesTypes, TKeyframesData>

export type TKeyframesData = {
  keyframes: Record<TKeyframeKey, Record<TPropertyParameters, string | number>> & {
    easeEach?: string
  }
}

// GLOBAL

export type TCoordinates = {
  x?: number
  y?: number
  z?: number
}

export type TDimensions = {
  width?: number
  height?: number
  depth?: number
}

export type TMaterial = {
  opacity?: number
}

type TKeyframeKey = `step_${string}` | `${string}%` | 'easeEach'

/* type TPropertyParametersConstants = keyof TCoordinates | keyof TDimensions | keyof TMaterial */
type TPropertyParameters = keyof TCoordinates | keyof TDimensions | keyof TMaterial | 'ease'

export type TPropertyValuesTypes = THREE.Vector3 | THREE.Euler | TDimensions

// #################################################################
// #################################################################
// #################################################################

// DEFAULT VALUES

/* export type TDefaultValuesData<T extends TGroup | TMesh> = Omit<Partial<T>, 'material'> & {
  material?: Partial<THREE.Material>
  dimensions?: TDimensions
  text?: {
    keySuffix: string
  }
} */

// ANIMATION

/* export type TGetAnimationsDataSignature = {
  index?: number
  textGroupRef?: TGroup
  textLengthRef?: number[]
} */

// PROPERTIES

/* export type TProperties<T extends TGroup | TMesh> = Record<keyof T, string> */

// CONSTANTS

/* export type TConstants<T extends TGroup | TMesh> = {
  label?: string
  duration: number
  // defaultValues: TDefaultValuesConstants<T>
  defaultValues: TDefaultValuesConstants
  animations?: TAnimationsConstants<T>
} */

/* export type TDefaultValuesConstants<T extends TGroup | TMesh> = Partial<
  Record<keyof T, Record<string, string | number | boolean>>
> & {
  visible?: boolean
  dimensions?: TDimensionsData
  text?: TTextConstants
} */

/* export type TDefaultValuesConstants = {
  visible?: boolean
  position?: TCoordinatesConstants
  rotation?: TCoordinatesConstants
  scale?: TCoordinatesConstants
  dimensions?: TDimensionsData
  text?: TTextConstants
  material?: Partial<THREE.Material>
} */

/* export type TPropertyValueTypes = TCoordinates | TDimensions | Partial<THREE.Material> */

/* export type TPropertyValuesTypes = THREE.Vector3 | THREE.Euler | TDimensions */

/* export type TAnimationsConstants<T extends TGroup | TMesh> = Partial<
  Record<keyof T, Record<string, string | Record<string, string | number | boolean>>>
> */

/* export type TAnimationsConstants<T extends TGroup | TMesh> = Record<
  keyof T,
  Record<TKeyframeKey, Record<string, string | number | boolean>>
> & {} */
