import { AmbientLightProps, DirectionalLightProps } from '@react-three/fiber'

export type TAmbientLightData = {
  defaultValues: AmbientLightProps
}

export type TDirectionalLightData = DirectionalLightProps & {
  'shadow-mapSize': [number, number]
  'shadow-camera-far': number
  'shadow-camera-left': number
  'shadow-camera-right': number
  'shadow-camera-top': number
  'shadow-camera-bottom': number
  'shadow-radius': number
  'shadow-bias': number
}
