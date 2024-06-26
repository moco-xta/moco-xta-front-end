import * as THREE from 'three'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// AMOR LLAMA AMOR

const amorllamaAmorMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.AMOR_LLAMA_AMOR.HOY_SI.DIFFUSE.ONE_K,
)
amorllamaAmorMap.flipY = false

// BRAIN

const brainMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.BRAIN.BRAIN.DIFFUSE.ONE_K,
)
brainMap.flipY = false

const brainFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.DIFFUSE.ONE_K,
)
brainFrameMap.flipY = false

const brainFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.ROUGHNESS.ONE_K,
)
brainFrameRoughnessMap.flipY = false

const brainFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.NORMAL.ONE_K,
)
brainFrameNormalMap.flipY = false

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

// MONARCH

const monarchMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH.DIFFUSE.ONE_K,
)
monarchMap.flipY = false

const monarchFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.DIFFUSE.ONE_K,
)
monarchFrameMap.flipY = false

const monarchFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.ROUGHNESS.ONE_K,
)
monarchFrameRoughnessMap.flipY = false

const monarchFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.NORMAL.ONE_K,
)
monarchFrameNormalMap.flipY = false

const monarchFrameBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.BUMP.ONE_K,
)
monarchFrameBumpMap.flipY = false

const monarchBottomMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.DIFFUSE.ONE_K,
)
monarchBottomMap.flipY = false

const monarchBottomRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.ROUGHNESS.ONE_K,
)
monarchBottomRoughnessMap.flipY = false

const monarchBottomNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.NORMAL.ONE_K,
)
monarchBottomNormalMap.flipY = false

const monarchShadowMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.MONARCH.MONARCH_SHADOW.DIFFUSE.FOUR_K,
)
monarchShadowMap.flipY = false

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

// WALL CLOCK

const mondaineWallClockMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.MONDAINE_WALL_CLOCK.DIFFUSE.ONE_K,
)
mondaineWallClockMap.flipY = false

const wallClockBrushedMetalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL.DIFFUSE.ONE_K,
)
wallClockBrushedMetalMap.flipY = false

const wallClockBrushedMetalRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL.ROUGHNESS.ONE_K,
)
wallClockBrushedMetalRoughnessMap.flipY = false

const wallClockBrushedMetalNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL.NORMAL.ONE_K,
)
wallClockBrushedMetalNormalMap.flipY = false

const wallClockBrushedMetalBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL.BUMP.ONE_K,
)
wallClockBrushedMetalBumpMap.flipY = false

// TEXTURES

const laboratoireFinalRenderTextures: {
  [key: string]: { [key: string]: THREE.Texture }
} = {
  amorllamaAmor: {
    map: amorllamaAmorMap,
  },
  brain: {
    map: brainMap,
  },
  brainFrame: {
    map: brainFrameMap,
    roughnessMap: brainFrameRoughnessMap,
    normalMap: brainFrameNormalMap,
  },
  deskChair: {
    map: deskChairLeatherMap,
    roughnessMap: deskChairLeatherRoughnessMap,
    normalMap: deskChairLeatherNormalMap,
  },
  monarch: {
    map: monarchMap,
  },
  monarchFrame: {
    map: monarchFrameMap,
    roughnessMap: monarchFrameRoughnessMap,
    normalMap: monarchFrameNormalMap,
    bumpMap: monarchFrameBumpMap,
  },
  monarchBottom: {
    map: monarchBottomMap,
    roughnessMap: monarchBottomRoughnessMap,
    normalMap: monarchBottomNormalMap,
  },
  monarchShadow: {
    map: monarchShadowMap,
  },
  mondaineWallClock: {
    map: mondaineWallClockMap,
  },
  parquet: {
    map: parquetMap,
    roughnessMap: parquetRoughnessMap,
    normalMap: parquetNormalMap,
    bumpMap: parquetBumpMap,
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
  wallClockBrushedMetal: {
    map: wallClockBrushedMetalMap,
    roughnessMap: wallClockBrushedMetalRoughnessMap,
    normalMap: wallClockBrushedMetalNormalMap,
    bumpMap: wallClockBrushedMetalBumpMap,
  },
}

export default laboratoireFinalRenderTextures
