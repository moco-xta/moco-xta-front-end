import * as THREE from 'three'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// DESK CHAIR

const deskChairLeatherMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION
    .DESK_CHAIR_LEATHER.DIFFUSE.ONE_K,
)
deskChairLeatherMap.flipY = false

const deskChairLeatherRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION
    .DESK_CHAIR_LEATHER.ROUGHNESS.ONE_K,
)
deskChairLeatherRoughnessMap.flipY = false

const deskChairLeatherNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION
    .DESK_CHAIR_LEATHER.NORMAL.ONE_K,
)
deskChairLeatherNormalMap.flipY = false

// PARQUET

const parquetMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET
    .DIFFUSE.ONE_K,
)
parquetMap.wrapS = THREE.RepeatWrapping
parquetMap.wrapT = THREE.RepeatWrapping
parquetMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET
    .BUMP.ONE_K,
)
parquetBumpMap.wrapS = THREE.RepeatWrapping
parquetBumpMap.wrapT = THREE.RepeatWrapping
parquetBumpMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET
    .NORMAL.ONE_K,
)
parquetNormalMap.wrapS = THREE.RepeatWrapping
parquetNormalMap.wrapT = THREE.RepeatWrapping
parquetNormalMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

const parquetRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET
    .ROUGHNESS.ONE_K,
)
parquetRoughnessMap.wrapS = THREE.RepeatWrapping
parquetRoughnessMap.wrapT = THREE.RepeatWrapping
parquetRoughnessMap.repeat.set(
  aboutConstants.PARQUET.REPEAT,
  aboutConstants.PARQUET.REPEAT,
)

// TRESTLE

const trestleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRESTLE
    .DIFFUSE.ONE_K,
)
trestleMap.flipY = false

// TRINITY

const trinityMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.TRINITY.TRINITY.DIFFUSE,
)
trinityMap.flipY = false

const trinityFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.DIFFUSE.ONE_K,
)
trinityFrameMap.flipY = false

const trinityFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.ROUGHNESS.ONE_K,
)
trinityFrameRoughnessMap.flipY = false

const trinityFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.NORMAL.ONE_K,
)
trinityFrameNormalMap.flipY = false

// TEXTURES

const laboratoireFinalRenderTextures: {
  [key: string]: { [key: string]: THREE.Texture }
} = {
  deskChair: {
    map: deskChairLeatherMap,
    roughnessMap: deskChairLeatherRoughnessMap,
    normalMap: deskChairLeatherNormalMap,
  },
  parquet: {
    map: parquetMap,
    bumpMap: parquetBumpMap,
    normalMap: parquetNormalMap,
    roughnessMap: parquetRoughnessMap,
  },
  trestle: {
    map: trestleMap,
  },
  trinity: {
    map: trinityMap,
  },
  trinityFrame: {
    map: trinityFrameMap,
    roughnessMap: trinityFrameRoughnessMap,
    normalMap: trinityFrameNormalMap,
  },
}

export default laboratoireFinalRenderTextures
