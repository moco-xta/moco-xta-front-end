import * as THREE from 'three'

// HEADER

export type THeader = {
  isMain?: boolean
  logoMocoMaterial: THREE.MeshNormalMaterial | THREE.MeshStandardMaterial
}

// LOGO MOCO

export type TLogoMoco = {
  isMain?: boolean
  logoMocoMaterial: THREE.MeshNormalMaterial | THREE.MeshStandardMaterial
}

// LAZY FACTORY

export type TLazyFactory = {
  (): Promise<{ default: React.ComponentType<any> }>
}
