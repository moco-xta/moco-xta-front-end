import { MutableRefObject } from 'react'
import * as THREE from 'three'
import { FloatProps } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import type { TLazyPad } from '@/types/components/three/types'

// CAMERA

export type TCameraDefaultValues = {
  camera: TPerspectiveCameraData
  float?: FloatProps
}

export type TPerspectiveCameraData = {
  makeDefault?: boolean
  position?: THREE.Vector3
  rotation?: THREE.Euler
  fov?: number
  near?: number
  far?: number
}

// LOGO

export type TLogoData = {
  name: string
}

// COORDINATES

export type TCoordinatesData = {
  x?: number
  y?: number
  z?: number
}

// DIMENSIONS

export type TDimensionsData = {
  width?: number
  height?: number
  depth?: number
}

// MATERIAL

export type TMaterialData = {
  color?: string | THREE.Color
  roughness?: number
  transparent?: boolean
  opacity?: number
  emissive?: string | THREE.Color
  emissiveIntensity?: number
  wireframe?: boolean
  side?: THREE.Side
  needsUpdate?: boolean
}

// COLOR

export type TColorData = {
  r: number
  g: number
  b: number
}

// TEXTURES

export type TTexturesData = Record<string, Record<string, THREE.Texture>>

// TEXT 3D

export type TText3DData = {
  geometry: TTextGeometryData
  material: TMaterialData
}

type TTextGeometryData = {
  font: string
  size?: number
  depth?: number
  center?: boolean
  spaceWidth?: number
}

export type TWord3DData = TTextGeometryData & {
  name: string
  position?: THREE.Vector3
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3DData = TTextGeometryData & {
  name: string
  lengthRef?: MutableRefObject<number[]>
  letter: string
  index?: number
  children: JSX.Element
}

// MODELS

export type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

// RUBIKS CUBE

export type TLazyPadData = {
  componentName: string
  model: TLazyPad
}

// PROJECTS

export type TProjectData = {
  name: string
  url: string
  description: string
}

export type TProjects = {
  projectsData: TProjectData[]
}
