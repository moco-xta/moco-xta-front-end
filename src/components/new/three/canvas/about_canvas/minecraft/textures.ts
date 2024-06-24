import * as THREE from 'three'

import useTextureLoader from '@/hooks/new/useTextureLoader'

import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

const dirtTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.DIRT,
)
const logTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.LOG,
)
const grassTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.GRASS,
)
const glassTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.GLASS,
)
const woodTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.WOOD,
)
const groundTexture = new THREE.TextureLoader().load(
  texturesConstants.MINECRAFT.GRASS,
)

dirtTexture.magFilter = THREE.NearestFilter
glassTexture.magFilter = THREE.NearestFilter
grassTexture.magFilter = THREE.NearestFilter
groundTexture.magFilter = THREE.NearestFilter
groundTexture.wrapS = THREE.RepeatWrapping
groundTexture.wrapT = THREE.RepeatWrapping
logTexture.magFilter = THREE.NearestFilter
woodTexture.magFilter = THREE.NearestFilter

const textures: { [key: string]: THREE.Texture } = {
  dirtTexture: dirtTexture,
  glassTexture: glassTexture,
  grassTexture: grassTexture,
  groundTexture: groundTexture,
  logTexture: logTexture,
  woodTexture: woodTexture,
}

export default textures
