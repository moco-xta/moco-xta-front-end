// ANIMATIONS [CONSTANTS]

export type TAnimationsConstants = Partial<
  Record<
    TPropertiesTypes,
    {
      keyframes: Record<TKeyframeKey, string | number | boolean>
    }
  >
>

// GLOBAL

/* type TPropertyParametersConstants = keyof TCoordinates | keyof TDimensions | keyof TMaterial */

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
