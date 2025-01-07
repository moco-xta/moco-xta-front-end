export type TCube = {
  position: [x: number, y: number, z: number]
  texture: string
}

export type TMinecraftState = {
  texture: string
  cubes: TCube[]
}
