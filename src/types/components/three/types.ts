import type { ComponentType, LazyExoticComponent, MutableRefObject } from 'react'
import * as THREE from 'three'
import type {
  AmbientLightProps,
  CanvasProps,
  DirectionalLightProps,
  GroupProps,
  MeshProps,
} from '@react-three/fiber'

import type { TLogoData, TPerspectiveCameraData } from '@/types/data/components/three/types'

// CANVAS

export type TCanvasDefaultValues = Partial<CanvasProps>

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

// WORD 3D

type TTextGeometry = {
  font: string
  size?: number
  depth?: number
  center?: boolean
  spaceWidth?: number
}

export type TWord3D = TTextGeometry & {
  name: string
  position?: THREE.Vector3
  splittedWord: string[]
  lengthRef?: MutableRefObject<number[]>
  children: JSX.Element
}

export type TLetter3D = TTextGeometry & {
  name: string
  lengthRef?: MutableRefObject<number[]>
  letter: string
  index?: number
  children: JSX.Element
}

// PHYSICS

export type TPhysicsGround = {
  args: [number, number]
  position?: THREE.Vector3
}

// SKILL LOGO

export type TSkillLogoCanvas = {
  logoData: TLogoData
}

export type TSkillLogo = {
  logoData: TLogoData
}

export type TProjectLogo = Partial<THREE.Group> & {
  path: string
  prefix: string
  logoData: TLogoData
  maxSize?: number
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

// SKILLS

export type TPointer = {
  pointerRef: MutableRefObject<THREE.Vector3>
}

export type TResourcesLogo = {
  pathToModel: string
  componentName: string
}

// LABORATORY

export type TWallClockComponent = GroupProps & {
  date: Date
}
