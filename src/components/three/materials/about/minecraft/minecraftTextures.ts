import * as THREE from 'three'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

const dirtTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.DIRT)
dirtTexture.magFilter = THREE.NearestFilter

const logTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.LOG)
logTexture.magFilter = THREE.NearestFilter

const grassTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.GRASS)
grassTexture.magFilter = THREE.NearestFilter

const glassTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.GLASS)
glassTexture.magFilter = THREE.NearestFilter

const woodTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.WOOD)
woodTexture.magFilter = THREE.NearestFilter

const groundTexture = new THREE.TextureLoader().load(texturesConstants.MINECRAFT.GRASS)
groundTexture.magFilter = THREE.NearestFilter
groundTexture.wrapS = THREE.RepeatWrapping
groundTexture.wrapT = THREE.RepeatWrapping

const minecraftTextures: {
  [key: string]: THREE.Texture
} = {
  dirtTexture: dirtTexture,
  glassTexture: glassTexture,
  grassTexture: grassTexture,
  groundTexture: groundTexture,
  logTexture: logTexture,
  woodTexture: woodTexture,
}

export default minecraftTextures
