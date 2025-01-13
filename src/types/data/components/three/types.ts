import * as THREE from 'three'
import { FloatProps } from '@react-three/drei'

// CAMERA

export type TCameraData = {
  defaultValues: {
    perspectiveCamera: TPerspectiveCameraData
    float?: FloatProps
  }
}

export type TPerspectiveCameraData = {
  makeDefault: boolean
  position: THREE.Vector3
  rotation: THREE.Euler
  fov: number
  near: number
  far: number
}

// LOGO

import { TLazyPad } from '@/types/components/three/types'

export type TLogoData = {
  name: string
}

// COORDINATES

export type TCoordinatesData = {
  x?: number
  y?: number
  z?: number
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
