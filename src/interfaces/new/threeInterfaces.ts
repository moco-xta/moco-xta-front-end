export interface CannonPlayerInterface {
  pointerLockControlsSelector: string
}

export interface PlayerInterface {
  cameraRotation: THREE.Euler
  rigidBodyPosition: THREE.Vector3
  cuboidColliderArgs: [halfWidth: number, halfHeight: number, halfDepth: number]
}

export interface SocialsCanvasInterface {
  className: string
}

export interface AboutSceneInterface {
  isClayRender: boolean
}
