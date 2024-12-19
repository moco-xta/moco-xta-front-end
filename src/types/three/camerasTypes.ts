import { FloatProps } from '@react-three/drei'
import { PerspectiveCameraProps } from '@react-three/fiber'

export type TCameraData = {
  defaultValues: {
    camera: PerspectiveCameraProps & {
      // Object literal may only specify known properties, and 'makeDefault' does not exist in type 'Partial<PerspectiveCamera>' ???
      makeDefault: boolean
    }
    float?: FloatProps
  }
}
