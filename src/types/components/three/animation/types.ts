export type THoverModelAnimation = {
  duration: number
  ease: string
  rotation: {
    factor: number
    initial: {
      x: number
      y: number
      z: number
    }
  }
  scale: {
    factor: number
    initial: number
  }
}
