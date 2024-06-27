import * as THREE from 'three'

import minecraftTextures from './minecraftTextures'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'

const minecraftGroundMap = minecraftTextures['groundTexture']
minecraftGroundMap.repeat.set(
  minecraftConstants.GROUND.MATERIAL.MAP.REPEAT,
  minecraftConstants.GROUND.MATERIAL.MAP.REPEAT,
)

export const minecraftGroundMaterial = new THREE.MeshStandardMaterial({
  map: minecraftGroundMap,
  side: THREE.DoubleSide
})
