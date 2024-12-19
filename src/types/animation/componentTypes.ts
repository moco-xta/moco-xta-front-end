export type TGroup = THREE.Group & {
  visibility: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  scale?: THREE.Vector3
}

export type TMesh = Omit<THREE.Mesh, 'material'> & {
  material: TMaterial
}

type TMaterial = {
  opacity?: number
}
