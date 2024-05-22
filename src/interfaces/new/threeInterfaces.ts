import { ThreeEvent } from '@react-three/fiber'

export interface IntersectCubeInterface {
  handleOnPointerMove: (event: ThreeEvent<PointerEvent>) => void
  handleOnPointerLeave: (event: ThreeEvent<PointerEvent>) => void
}
