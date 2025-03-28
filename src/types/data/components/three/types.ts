import * as THREE from 'three'

// TEXTURES

export type TTexturesData = Record<string, Record<string, THREE.Texture>>

// LOGO

export interface ILogoData {
  name: string
}
