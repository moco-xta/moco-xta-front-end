import type { TText3D } from '@/types/three/lib/word3DTypes'

// DIMENSIONS (BOUNDING BOX)

export type TDimensionsData = {
  width?: number
  height?: number
  depth?: number
}

// TEXT

export type Text3DData = {
  geometry: TText3D
  material:
    | THREE.Material
    | {
        color?: string | THREE.Color
      }
}
