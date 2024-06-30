import * as THREE from 'three'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// AMOR LLAMA AMOR

const amorllamaAmorMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION
    .AMOR_LLAMA_AMOR.HOY_SI.DIFFUSE.HALF_K,
)
amorllamaAmorMap.flipY = false

// BRAIN

const brainMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.BRAIN
    .DIFFUSE.HALF_K,
)
brainMap.flipY = false

const brainFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN
    .BRAIN_FRAME.DIFFUSE.HALF_K,
)
brainFrameMap.flipY = false

const brainFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN
    .BRAIN_FRAME.ROUGHNESS.HALF_K,
)
brainFrameRoughnessMap.flipY = false

const brainFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN
    .BRAIN_FRAME.NORMAL.HALF_K,
)
brainFrameNormalMap.flipY = false

// CELESTIAL MAP

const celestialMapMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP
    .CELESTIAL_MAP.DIFFUSE,
)
celestialMapMap.flipY = false

const celestialMapFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP
    .CELESTIAL_MAP_FRAME.DIFFUSE.HALF_K,
)
celestialMapFrameMap.flipY = false

const celestialMapFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP
    .CELESTIAL_MAP_FRAME.ROUGHNESS.HALF_K,
)
celestialMapFrameRoughnessMap.flipY = false

const celestialMapFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP
    .CELESTIAL_MAP_FRAME.NORMAL.HALF_K,
)
celestialMapFrameNormalMap.flipY = false

// COURONNES

const couronnesMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES
    .COURONNES.DIFFUSE.ONE_K,
)
couronnesMap.flipY = false

const couronnesRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES
    .COURONNES.ROUGHNESS.HALF_K,
)
couronnesRoughnessMap.flipY = false

const couronnesNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES
    .COURONNES.NORMAL.HALF_K,
)
couronnesNormalMap.flipY = false

// DESK CHAIR

const deskChairLeatherMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.DIFFUSE
    .HALF_K,
)
deskChairLeatherMap.flipY = false

const deskChairLeatherRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.ROUGHNESS
    .HALF_K,
)
deskChairLeatherRoughnessMap.flipY = false

const deskChairLeatherNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.NORMAL.HALF_K,
)
deskChairLeatherNormalMap.flipY = false

// MONARCH

const monarchMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH.DIFFUSE.HALF_K,
)
monarchMap.flipY = false

const monarchFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_FRAME.DIFFUSE.HALF_K,
)
monarchFrameMap.flipY = false

const monarchFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_FRAME.ROUGHNESS.HALF_K,
)
monarchFrameRoughnessMap.flipY = false

const monarchFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_FRAME.NORMAL.HALF_K,
)
monarchFrameNormalMap.flipY = false

const monarchFrameBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_FRAME.BUMP.HALF_K,
)
monarchFrameBumpMap.flipY = false

const monarchBottomMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_BOTTOM.DIFFUSE.HALF_K,
)
monarchBottomMap.flipY = false

const monarchBottomRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_BOTTOM.ROUGHNESS.HALF_K,
)
monarchBottomRoughnessMap.flipY = false

const monarchBottomNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_BOTTOM.NORMAL.HALF_K,
)
monarchBottomNormalMap.flipY = false

const monarchShadowMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH
    .MONARCH_SHADOW.DIFFUSE.HALF_K,
)
monarchShadowMap.flipY = false

// NICOTIANA RUSTICA

const nicotianaRusticaMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION
    .NICOTIANA_RUSTICA.NICOTIANA_RUSTICA.DIFFUSE.HALF_K,
)
nicotianaRusticaMap.flipY = false

const nicotianaRusticaFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION
    .NICOTIANA_RUSTICA.NICOTIANA_RUSTICA_FRAME.DIFFUSE.HALF_K,
)
nicotianaRusticaFrameMap.flipY = false

const nicotianaRusticaFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION
    .NICOTIANA_RUSTICA.NICOTIANA_RUSTICA_FRAME.ROUGHNESS.HALF_K,
)
nicotianaRusticaFrameRoughnessMap.flipY = false

const nicotianaRusticaFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION
    .NICOTIANA_RUSTICA.NICOTIANA_RUSTICA_FRAME.NORMAL.HALF_K,
)
nicotianaRusticaFrameNormalMap.flipY = false

// PABALO ESCOBAR

const pabloEscobarMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PABLO_ESCOBAR.DIFFUSE,
)
pabloEscobarMap.flipY = false

// PARQUET

const parquetMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.DIFFUSE.HALF_K,
)
parquetMap.wrapS = THREE.RepeatWrapping
parquetMap.wrapT = THREE.RepeatWrapping
parquetMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.BUMP.HALF_K,
)
parquetBumpMap.wrapS = THREE.RepeatWrapping
parquetBumpMap.wrapT = THREE.RepeatWrapping
parquetBumpMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.NORMAL.HALF_K,
)
parquetNormalMap.wrapS = THREE.RepeatWrapping
parquetNormalMap.wrapT = THREE.RepeatWrapping
parquetNormalMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.ROUGHNESS.HALF_K,
)
parquetRoughnessMap.wrapS = THREE.RepeatWrapping
parquetRoughnessMap.wrapT = THREE.RepeatWrapping
parquetRoughnessMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

// SHELF

const shelfMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.DIFFUSE.HALF_K,
)
shelfMap.flipY = false

const shelfRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.ROUGHNESS.HALF_K,
)
shelfRoughnessMap.flipY = false

const shelfNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.NORMAL.HALF_K,
)
shelfNormalMap.flipY = false

// SPEAKERS

const speakerBoxMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.DIFFUSE.HALF_K,
)
speakerBoxMap.flipY = false

const speakerBoxRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.ROUGHNESS.HALF_K,
)
speakerBoxRoughnessMap.flipY = false

const speakerBoxNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.NORMAL.HALF_K,
)
speakerBoxNormalMap.flipY = false

// TRESTLE

const trestleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRESTLE.DIFFUSE.HALF_K,
)
trestleMap.flipY = false

// TRINITY

const trinityMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY
    .TRINITY.DIFFUSE,
)
trinityMap.flipY = false

const trinityFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY
    .TRINITY_FRAME.DIFFUSE.HALF_K,
)
trinityFrameMap.flipY = false

const trinityFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY
    .TRINITY_FRAME.ROUGHNESS.HALF_K,
)
trinityFrameRoughnessMap.flipY = false

const trinityFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY
    .TRINITY_FRAME.NORMAL.HALF_K,
)
trinityFrameNormalMap.flipY = false

// VIRGEN DE GUADALUPE

const virgenDeGuadalupeMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE.DIFFUSE
    .HALF_K,
)
virgenDeGuadalupeMap.flipY = false

// WALL CLOCK

const mondaineWallClockMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .MONDAINE_WALL_CLOCK.DIFFUSE.HALF_K,
)
mondaineWallClockMap.flipY = false

const wallClockBrushedMetalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .WALL_CLOCK_BRUSHED_METAL.DIFFUSE.HALF_K,
)
wallClockBrushedMetalMap.flipY = false

const wallClockBrushedMetalRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .WALL_CLOCK_BRUSHED_METAL.ROUGHNESS.HALF_K,
)
wallClockBrushedMetalRoughnessMap.flipY = false

const wallClockBrushedMetalNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .WALL_CLOCK_BRUSHED_METAL.NORMAL.HALF_K,
)
wallClockBrushedMetalNormalMap.flipY = false

const wallClockBrushedMetalBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION
    .WALL_CLOCK_BRUSHED_METAL.BUMP.HALF_K,
)
wallClockBrushedMetalBumpMap.flipY = false

// WORLD MAP

const worldMapMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP.DIFFUSE.ONE_K,
)
worldMapMap.flipY = false

const worldMapStandMarbleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE
    .DIFFUSE.HALF_K,
)
worldMapStandMarbleMap.flipY = false

const worldMapStandMarbleRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE
    .ROUGHNESS.HALF_K,
)
worldMapStandMarbleRoughnessMap.flipY = false

const worldMapStandMarbleNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE.NORMAL
    .HALF_K,
)
worldMapStandMarbleNormalMap.flipY = false

const worldMapStandUsedMetalRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.USED_METAL
    .ROUGHNESS.HALF_K,
)
worldMapStandUsedMetalRoughnessMap.flipY = false

const worldMapStandUsedMetalNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.USED_METAL
    .NORMAL.HALF_K,
)
worldMapStandUsedMetalNormalMap.flipY = false

// TEXTURES

const laboratoireFinalRenderTextures: {
  [key: string]: {
    [key: string]: THREE.Texture
  }
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
  celestialMap: {
    map: celestialMapMap,
  },
  celestialMapFrame: {
    map: celestialMapFrameMap,
    roughnessMap: celestialMapFrameRoughnessMap,
    normalMap: celestialMapFrameNormalMap,
  },
  couronnes: {
    map: couronnesMap,
    roughnessMap: couronnesRoughnessMap,
    normalMap: couronnesNormalMap,
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
  nicotianaRustica: {
    map: nicotianaRusticaMap,
  },
  nicotianaRusticaFrame: {
    map: nicotianaRusticaFrameMap,
    roughnessMap: nicotianaRusticaFrameRoughnessMap,
    normalMap: nicotianaRusticaFrameNormalMap,
  },
  pabloEscobar: {
    map: pabloEscobarMap,
  },
  parquet: {
    map: parquetMap,
    roughnessMap: parquetRoughnessMap,
    normalMap: parquetNormalMap,
    bumpMap: parquetBumpMap,
  },
  shelf: {
    map: shelfMap,
    roughnessMap: shelfRoughnessMap,
    normalMap: shelfNormalMap,
  },
  speakerBox: {
    map: speakerBoxMap,
    roughnessMap: speakerBoxRoughnessMap,
    normalMap: speakerBoxNormalMap,
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
  virgenDeGuadalupe: {
    map: virgenDeGuadalupeMap,
  },
  wallClockBrushedMetal: {
    map: wallClockBrushedMetalMap,
    roughnessMap: wallClockBrushedMetalRoughnessMap,
    normalMap: wallClockBrushedMetalNormalMap,
    bumpMap: wallClockBrushedMetalBumpMap,
  },
  worldMap: {
    map: worldMapMap,
  },
  worldMapStandMarble: {
    map: worldMapStandMarbleMap,
    roughnessMap: worldMapStandMarbleRoughnessMap,
    normalMap: worldMapStandMarbleNormalMap,
  },
  worldMapStandUsedMetal: {
    roughnessMap: worldMapStandUsedMetalRoughnessMap,
    normalMap: worldMapStandUsedMetalNormalMap,
  },
}

export default laboratoireFinalRenderTextures
