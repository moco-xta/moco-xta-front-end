import { ComponentType, LazyExoticComponent, MutableRefObject } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { AmbientLightProps, DirectionalLightProps, GroupProps, MeshProps } from '@react-three/fiber'

import type { TCameraDefaultValues, TPerspectiveCameraData } from '@/types/data/three/types'
import type { TLogoData } from '@/types/data/components/three/types'

// CUSTOM CAMERA

export type TCamera = {
  defaultValues: TCameraDefaultValues
}

export type TCustomCamera = {
  defaultValues: TCameraDefaultValues
}

// PLAYER

export type TPlayer = {
  rigidBodyDefaultValues: {
    position: THREE.Vector3
  }
  cameraDefaultValues: TPerspectiveCameraData
  speed?: number
  jumpForce?: number
}

export type TPlayerCamera = {
  cameraDefaultValues: TPerspectiveCameraData
}

export type TPlayerPointerLockControls = {
  pointerLockControlsSelector: string
}

// PHYSICS

export type TPhysicsGround = {
  args: [number, number]
  position?: THREE.Vector3
}

// MODELS

export type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>
  materials: Record<string, THREE.MeshStandardMaterial>
}

// LIGHTS

export type TAmbientLightData = {
  defaultValues: AmbientLightProps
}

export type TDirectionalLightData = DirectionalLightProps & {
  'shadow-mapSize': [number, number]
  'shadow-camera-far': number
  'shadow-camera-left': number
  'shadow-camera-right': number
  'shadow-camera-top': number
  'shadow-camera-bottom': number
  'shadow-radius': number
  'shadow-bias': number
}

// LAZY FACTORY

export type TLazyFactory = {
  (): Promise<{ default: React.ComponentType<any> }>
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

// RUBIKS CUBE

export type TCube = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

export type TPads = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

export type TPad = {
  currentPadIndex: number
  rotation: THREE.Euler
}

export type TRotationGroupsAndButtons = {
  rubiksCubeRef: MutableRefObject<THREE.Group>
}

export type TLazyPad = LazyExoticComponent<ComponentType<MeshProps>>

// PROJECTS

export type TProjectScene = {
  currentProject: number
  currentCompany: number
}

export type TProjectLogo = Partial<THREE.Group> & {
  path: string
  prefix: string
  logoData: TLogoData
  maxSize?: number
}

// LABORATORY

export type TWallClockComponent = GroupProps & {
  date: Date
}
