import { MutableRefObject } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { GroupProps } from '@react-three/fiber'

import type { TCameraDefaultValues } from '@/types/data/three/types'

// COORDINATES

export type TCoordinatesData = {
  x?: number
  y?: number
  z?: number
}

// CUSTOM CAMERA

export type TCamera = {
  defaultValues: TCameraDefaultValues
}

export type TCustomCamera = {
  defaultValues: TCameraDefaultValues
}

// MODELS

export type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

// LOGO MOCO

export type TLogoMocoCanvas = {
  logoMocoMaterial: THREE.Material
}

export type TLogoMoco = GroupProps & {
  material: THREE.Material
}

// HERO

export type TMocoHelium = {
  terminalType: 'isDesktop' | 'isMobile'
}

export type TPointer = {
  pointerRef: MutableRefObject<THREE.Vector3>
}

export type THeroLogo = {
  pathToModel: string
  componentName: string
}
