export interface PlayerInterface {
  rigidBodyPosition: THREE.Vector3
  cuboidColliderArgs: [halfWidth: number, halfHeight: number, halfDepth: number]
}

export interface SocialsCanvasInterface {
  className: string
}

export interface AboutCanvasInterface {
  showInstructions: boolean
  setShowInstructions: (value: boolean) => void
}
