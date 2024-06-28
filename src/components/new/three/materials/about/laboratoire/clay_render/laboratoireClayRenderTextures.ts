import * as THREE from 'three'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

// CEILING

const ceilingMap = new THREE.TextureLoader().load(texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.CEILING.DIFFUSE.ONE_K)
ceilingMap.flipY = false
ceilingMap.encoding = THREE.sRGBEncoding

const ceilingLampFrameMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.CEILING.DIFFUSE.ONE_K,
)
ceilingLampFrameMap.flipY = false
ceilingLampFrameMap.encoding = THREE.sRGBEncoding

// DESK

const deskMapTexture = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.DESK.DIFFUSE.ONE_K,
)
deskMapTexture.flipY = false
deskMapTexture.encoding = THREE.sRGBEncoding

// CHAIR

const deskChairMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.DESK_CHAIR.DIFFUSE.ONE_K,
)
deskChairMap.flipY = false
deskChairMap.encoding = THREE.sRGBEncoding

// DOOR

const doorMap = new THREE.TextureLoader().load(texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.DOOR.DIFFUSE.ONE_K)
doorMap.flipY = false
doorMap.encoding = THREE.sRGBEncoding

//

const framesMap = new THREE.TextureLoader().load(texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.FRAMES.DIFFUSE.ONE_K)
framesMap.flipY = false
framesMap.encoding = THREE.sRGBEncoding

// NORTH WALL

const northWallMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.NORTH_WALL.DIFFUSE.ONE_K,
)
northWallMap.flipY = false
northWallMap.encoding = THREE.sRGBEncoding

// PARQUET

const parquetMap = new THREE.TextureLoader().load(texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.PARQUET.DIFFUSE.ONE_K)
parquetMap.flipY = false
parquetMap.encoding = THREE.sRGBEncoding

// SHELF

const shelfMap = new THREE.TextureLoader().load(texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.SHELF.DIFFUSE.ONE_K)
shelfMap.flipY = false
shelfMap.encoding = THREE.sRGBEncoding

// SPEAKERS

const speakersMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.SPEAKERS.DIFFUSE.ONE_K,
)
speakersMap.flipY = false
speakersMap.encoding = THREE.sRGBEncoding

// VIDEO PROJECTOR

const videoProjectorMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.VIDEO_PROJECTOR.DIFFUSE.ONE_K,
)
videoProjectorMap.flipY = false
videoProjectorMap.encoding = THREE.sRGBEncoding

// WALL CLOCK

const wallClockMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.WALL_CLOCK.DIFFUSE.ONE_K,
)
wallClockMap.flipY = false
wallClockMap.encoding = THREE.sRGBEncoding

// WEST WALL

const westWallMap = new THREE.TextureLoader().load(
  texturesConstants.ABOUT.LABORATOIRE.CLAY_RENDER.WEST_WALL.DIFFUSE.ONE_K,
)
westWallMap.flipY = false
westWallMap.encoding = THREE.sRGBEncoding

// TEXTURES

const laboratoireClayRenderTextures: {
  [key: string]: { [key: string]: THREE.Texture }
} = {
  ceiling: {
    map: ceilingMap,
  },
  ceilingLampFrame: {
    map: ceilingLampFrameMap,
  },
  desk: {
    map: deskMapTexture,
  },
  deskChair: {
    map: deskChairMap,
  },
  door: {
    map: doorMap,
  },
  frames: {
    map: framesMap,
  },
  northWall: {
    map: northWallMap,
  },
  parquet: {
    map: parquetMap,
  },
  shelf: {
    map: shelfMap,
  },
  speakers: {
    map: speakersMap,
  },
  videoProjector: {
    map: videoProjectorMap,
  },
  wallClock: {
    map: wallClockMap,
  },
  westWall: {
    map: westWallMap,
  },
}

export default laboratoireClayRenderTextures
