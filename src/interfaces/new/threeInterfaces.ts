import { GroupProps } from '@react-three/fiber'

export interface CannonPlayerInterface {
  pointerLockControlsSelector: string
}

export interface RapierPlayerInterface {
  cameraRotation: THREE.Euler
  rigidBodyPosition: THREE.Vector3
  capsuleColliderArgs: [halfHeight: number, radius: number]
  speed: number
  jumpForce: number
  pointerLockControlsSelector: string
}

export interface SocialsCanvasInterface {
  className: string
}

export interface AboutSceneInterface {
  isClayRender: boolean
}
