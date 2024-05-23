import { MutableRefObject, Ref } from 'react'
import { ThreeEvent } from '@react-three/fiber'

export interface IntersectCubeInterface {
  handleOnPointerMove: (event: ThreeEvent<PointerEvent>) => void
  handleOnPointerLeave: (event: ThreeEvent<PointerEvent>) => void
}

export interface CubeAndColorPadsInterface {
  colorPadIndex: MutableRefObject<number>
  coordinates: THREE.Vector3
}

export interface PadsInterface {
  colorPadIndex: MutableRefObject<number>
  coordinates: THREE.Vector3
}

export interface RotationGroupInterface {
  rubiksCubeRef: Ref<THREE.Group>
}
