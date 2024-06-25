import * as THREE from 'three'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// PARQUET

const parquetMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET.DIFFUSE.ONE_K,
)
parquetMap.wrapS = THREE.RepeatWrapping
parquetMap.wrapT = THREE.RepeatWrapping
parquetMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET.BUMP.ONE_K,
)
parquetBumpMap.wrapS = THREE.RepeatWrapping
parquetBumpMap.wrapT = THREE.RepeatWrapping
parquetBumpMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET.NORMAL.ONE_K,
)
parquetNormalMap.wrapS = THREE.RepeatWrapping
parquetNormalMap.wrapT = THREE.RepeatWrapping
parquetNormalMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET.ROUGHNESS.ONE_K,
)
parquetRoughnessMap.wrapS = THREE.RepeatWrapping
parquetRoughnessMap.wrapT = THREE.RepeatWrapping
parquetRoughnessMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

// TRESTLE

const trestleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.TRESTLE.DIFFUSE.ONE_K,
)
trestleMap.flipY = false

const laboratoireFinalRenderTextures: {
  [key: string]: { [key: string]: THREE.Texture }
} = {
  parquet: {
    map: parquetMap,
    bumpMap: parquetBumpMap,
    normalMap: parquetNormalMap,
    roughnessMap: parquetRoughnessMap,
  },
  trestle: {
    diffuse: trestleMap,
  },
}

export default laboratoireFinalRenderTextures
