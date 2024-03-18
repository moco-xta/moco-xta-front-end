export interface PlaneInterface {
  index: number
  args: [
    number | undefined,
    number | undefined,
    number | undefined,
    number | undefined,
  ]
  position: THREE.Vector3
  map: THREE.Texture
}
