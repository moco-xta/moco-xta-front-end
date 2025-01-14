import * as THREE from 'three'

import type { TTexturesData } from '@/types/data/components/three/types'

import { parquetDefaultValues } from '@/data/about/three/parquetData'

import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

// PARQUET

const loadTexture = (texturePath: string, repeat: number): THREE.Texture => {
  const texture = textureLoader.load(texturePath)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(repeat, repeat)
  return texture
}

const textureLoader = new THREE.TextureLoader()

const parquetConstants = texturesConstants.LABORATORY.PARQUET
const parquetRepeat = parquetDefaultValues.texture.repeat

const parquetTextures = {
  map: loadTexture(parquetConstants.DIFFUSE, parquetRepeat),
  bumpMap: loadTexture(parquetConstants.BUMP, parquetRepeat),
  normalMap: loadTexture(parquetConstants.NORMAL, parquetRepeat),
  roughnessMap: loadTexture(parquetConstants.ROUGHNESS, parquetRepeat),
}

export const texturesData: TTexturesData = {
  parquet: parquetTextures,
}
