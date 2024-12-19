export type TGroup = THREE.Group & {
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
}

export type TMesh = Omit<THREE.Mesh, 'material'> & {
  material?: TMaterial
}

/* export interface IMesh extends THREE.Mesh {
  material?: TMaterial
} */

type TMaterial = {
  opacity?: number
}
