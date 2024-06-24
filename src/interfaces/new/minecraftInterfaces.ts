export interface CubeInterface {
  key: string
  position: [x: number, y: number, z: number]
  texture: string
}

export interface MinecraftInterface {
  texture: string
  cubes: CubeInterface[]
}
