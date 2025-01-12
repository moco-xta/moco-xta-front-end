import { ComponentType, LazyExoticComponent, MutableRefObject } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'

import type { TLogoData } from '@/types/data/components/three/types'

// SKILL LOGO

export type TSkillLogoCanvas = {
  logoData: TLogoData
}

export type TSkillLogo = {
  logoData: TLogoData
}

// RUBIKS CUBE

export type TCube = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

// PADS

export type TPads = {
  coordinates: THREE.Vector3
  padIndexRef: MutableRefObject<number>
}

export type TPad = {
  currentPadIndex: number
  rotation: THREE.Euler
}

// RUBIKS CUBE

export type TLazyPad = LazyExoticComponent<ComponentType<MeshProps>>
