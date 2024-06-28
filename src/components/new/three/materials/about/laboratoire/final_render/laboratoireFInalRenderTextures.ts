import * as THREE from 'three'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// AMOR LLAMA AMOR

const amorllamaAmorMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.AMOR_LLAMA_AMOR.HOY_SI.DIFFUSE
    .ONE_K,
)
amorllamaAmorMap.flipY = false

// BRAIN

const brainMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.BRAIN.DIFFUSE.ONE_K,
)
brainMap.flipY = false

const brainFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.DIFFUSE.ONE_K,
)
brainFrameMap.flipY = false

const brainFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.ROUGHNESS.ONE_K,
)
brainFrameRoughnessMap.flipY = false

const brainFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN.BRAIN_FRAME.NORMAL.ONE_K,
)
brainFrameNormalMap.flipY = false

// CELESTIAL MAP

const celestialMapMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP.CELESTIAL_MAP
    .DIFFUSE,
)
celestialMapMap.flipY = false

const celestialMapFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP.CELESTIAL_MAP_FRAME
    .DIFFUSE.ONE_K,
)
celestialMapFrameMap.flipY = false

const celestialMapFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP.CELESTIAL_MAP_FRAME
    .ROUGHNESS.ONE_K,
)
celestialMapFrameRoughnessMap.flipY = false

const celestialMapFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP.CELESTIAL_MAP_FRAME
    .NORMAL.ONE_K,
)
celestialMapFrameNormalMap.flipY = false

// COURONNES

const couronnesMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES.COURONNES.DIFFUSE
    .ONE_K,
)
couronnesMap.flipY = false

const couronnesRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES.COURONNES.ROUGHNESS
    .ONE_K,
)
couronnesRoughnessMap.flipY = false

const couronnesNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES.COURONNES.NORMAL.ONE_K,
)
couronnesNormalMap.flipY = false

// DESK CHAIR

const deskChairLeatherMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.DIFFUSE.ONE_K,
)
deskChairLeatherMap.flipY = false

const deskChairLeatherRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.ROUGHNESS.ONE_K,
)
deskChairLeatherRoughnessMap.flipY = false

const deskChairLeatherNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR_LEATHER.NORMAL.ONE_K,
)
deskChairLeatherNormalMap.flipY = false

// MONARCH

const monarchMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH.DIFFUSE.ONE_K,
)
monarchMap.flipY = false

const monarchFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.DIFFUSE
    .ONE_K,
)
monarchFrameMap.flipY = false

const monarchFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.ROUGHNESS
    .ONE_K,
)
monarchFrameRoughnessMap.flipY = false

const monarchFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.NORMAL
    .ONE_K,
)
monarchFrameNormalMap.flipY = false

const monarchFrameBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_FRAME.BUMP.ONE_K,
)
monarchFrameBumpMap.flipY = false

const monarchBottomMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.DIFFUSE
    .ONE_K,
)
monarchBottomMap.flipY = false

const monarchBottomRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.ROUGHNESS
    .ONE_K,
)
monarchBottomRoughnessMap.flipY = false

const monarchBottomNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_BOTTOM.NORMAL
    .ONE_K,
)
monarchBottomNormalMap.flipY = false

const monarchShadowMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH.MONARCH_SHADOW.DIFFUSE
    .FOUR_K,
)
monarchShadowMap.flipY = false

// NICOTIANA RUSTICA

const nicotianaRusticaMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.NICOTIANA_RUSTICA
    .NICOTIANA_RUSTICA.DIFFUSE.ONE_K,
)
nicotianaRusticaMap.flipY = false

const nicotianaRusticaFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.NICOTIANA_RUSTICA
    .NICOTIANA_RUSTICA_FRAME.DIFFUSE.ONE_K,
)
nicotianaRusticaFrameMap.flipY = false

const nicotianaRusticaFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.NICOTIANA_RUSTICA
    .NICOTIANA_RUSTICA_FRAME.ROUGHNESS.ONE_K,
)
nicotianaRusticaFrameRoughnessMap.flipY = false

const nicotianaRusticaFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.NICOTIANA_RUSTICA
    .NICOTIANA_RUSTICA_FRAME.NORMAL.ONE_K,
)
nicotianaRusticaFrameNormalMap.flipY = false

// PABALO ESCOBAR

const pabloEscobarMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PABLO_ESCOBAR.DIFFUSE,
)
pabloEscobarMap.flipY = false

// PARQUET

const parquetMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.DIFFUSE.ONE_K,
)
parquetMap.wrapS = THREE.RepeatWrapping
parquetMap.wrapT = THREE.RepeatWrapping
parquetMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.BUMP.ONE_K,
)
parquetBumpMap.wrapS = THREE.RepeatWrapping
parquetBumpMap.wrapT = THREE.RepeatWrapping
parquetBumpMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.NORMAL.ONE_K,
)
parquetNormalMap.wrapS = THREE.RepeatWrapping
parquetNormalMap.wrapT = THREE.RepeatWrapping
parquetNormalMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

const parquetRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET.ROUGHNESS.ONE_K,
)
parquetRoughnessMap.wrapS = THREE.RepeatWrapping
parquetRoughnessMap.wrapT = THREE.RepeatWrapping
parquetRoughnessMap.repeat.set(
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
  laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.REPEAT,
)

// SHELF

const shelfMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.DIFFUSE.ONE_K,
)
shelfMap.flipY = false

const shelfRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.ROUGHNESS.ONE_K,
)
shelfRoughnessMap.flipY = false

const shelfNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.SHELF.NORMAL.ONE_K,
)
shelfNormalMap.flipY = false

// SPEAKERS

const speakerBoxMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.DIFFUSE.ONE_K,
)
speakerBoxMap.flipY = false

const speakerBoxRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.ROUGHNESS.ONE_K,
)
speakerBoxRoughnessMap.flipY = false

const speakerBoxNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX.NORMAL.ONE_K,
)
speakerBoxNormalMap.flipY = false

// TRESTLE

const trestleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRESTLE.DIFFUSE.ONE_K,
)
trestleMap.flipY = false

// TRINITY

const trinityMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.TRINITY.DIFFUSE,
)
trinityMap.flipY = false

const trinityFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.DIFFUSE
    .ONE_K,
)
trinityFrameMap.flipY = false

const trinityFrameRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.ROUGHNESS
    .ONE_K,
)
trinityFrameRoughnessMap.flipY = false

const trinityFrameNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY.TRINITY_FRAME.NORMAL
    .ONE_K,
)
trinityFrameNormalMap.flipY = false

// VIRGEN DE GUADALUPE

const virgenDeGuadalupeMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE.DIFFUSE.ONE_K,
)
virgenDeGuadalupeMap.flipY = false

// WALL CLOCK

const mondaineWallClockMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.MONDAINE_WALL_CLOCK.DIFFUSE
    .ONE_K,
)
mondaineWallClockMap.flipY = false

const wallClockBrushedMetalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL
    .DIFFUSE.ONE_K,
)
wallClockBrushedMetalMap.flipY = false

const wallClockBrushedMetalRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL
    .ROUGHNESS.ONE_K,
)
wallClockBrushedMetalRoughnessMap.flipY = false

const wallClockBrushedMetalNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL
    .NORMAL.ONE_K,
)
wallClockBrushedMetalNormalMap.flipY = false

const wallClockBrushedMetalBumpMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK_BRUSHED_METAL.BUMP
    .ONE_K,
)
wallClockBrushedMetalBumpMap.flipY = false

// WORLD MAP

const worldMapMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP.DIFFUSE.ONE_K,
)
worldMapMap.flipY = false

const worldMapStandMarbleMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE.DIFFUSE.ONE_K,
)
worldMapStandMarbleMap.flipY = false

const worldMapStandMarbleRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE.ROUGHNESS.ONE_K,
)
worldMapStandMarbleRoughnessMap.flipY = false

const worldMapStandMarbleNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.MARBLE.NORMAL.ONE_K,
)
worldMapStandMarbleNormalMap.flipY = false

const worldMapStandUsedMetalRoughnessMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.USED_METAL.ROUGHNESS.ONE_K,
)
worldMapStandUsedMetalRoughnessMap.flipY = false

const worldMapStandUsedMetalNormalMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND.USED_METAL.NORMAL.ONE_K,
)
worldMapStandUsedMetalNormalMap.flipY = false

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
