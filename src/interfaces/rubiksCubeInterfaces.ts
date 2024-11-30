import { MutableRefObject, Ref } from 'react'
import { MeshProps, ThreeEvent } from '@react-three/fiber'

export interface CubeInterface {
  coordinates: THREE.Vector3
  colorPadIndex: MutableRefObject<number>
}

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

export interface RotationGroupsAndButtonsInterface {
  rubiksCubeRef: Ref<THREE.Group>
}

export interface ColorPadInterface extends MeshProps {
  color: THREE.Color
}
