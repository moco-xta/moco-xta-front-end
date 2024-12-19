export type TProperties = {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
  material?: TMaterialProperties
}

export type TMaterialProperties = {
  opacity?: number
}
