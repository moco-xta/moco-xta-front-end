export interface PlayerInterface {
  rigidBodyPosition: THREE.Vector3
  cuboidColliderArgs: [
    halfWidth: number,
    halfHeight: number,
    halfDepth: number
  ]
}