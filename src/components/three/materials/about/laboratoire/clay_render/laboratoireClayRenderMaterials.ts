import * as THREE from 'three'

import laboratoireClayRenderTextures from '@/components/three/materials/about/laboratoire/clay_render/laboratoireClayRenderTextures'

// CEILING

export const ceilingMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.ceiling.map,
})

export const ceilingLampFrameMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.ceilingLampFrame.map,
})

// DESK

export const deskMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.desk.map,
})

// DESK CHAIR

export const deskChairMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.deskChair.map,
})

// DOOR

export const doorMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.door.map,
})

// FRAMES

export const framesMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.frames.map,
})

// NORTH WALL

export const northWallMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.northWall.map,
})

// PARQUET

export const parquetMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.parquet.map,
})

// SHELF

export const shelfMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.shelf.map,
})

// SPEAKERS

export const speakersMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.speakers.map,
})

// VIDEO PROJECTOR

export const videoProjectorMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.videoProjector.map,
})

// WALL CLOCK

export const wallClockMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.wallClock.map,
})

// WEST WALL

export const westWallMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireClayRenderTextures.westWall.map,
})
