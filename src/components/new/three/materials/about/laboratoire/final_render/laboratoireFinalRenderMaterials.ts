import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

// AMOR LLAMA AMOR

export const amorLlamaAmorMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ccc',
  map: laboratoireFinalRenderTextures.amorllamaAmor.map,
  roughness: 1,
})

export const amorLlamaAmorFrameMaterial = new THREE.MeshStandardMaterial({
  color: '#000000',
  roughness: 0.4,
})

// BRAIN

export const brainMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.brain.map,
  roughness: 1,
})

export const brainFrameMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.brainFrame.map,
  metalness: 0.2,
  roughness: 0.2,
  /* roughnessMap: laboratoireFinalRenderTextures.brainFrame.roughnessMap, */
  normalMap: laboratoireFinalRenderTextures.brainFrame.normalMap,
})

// BRASS

export const brassMaterial = new THREE.MeshStandardMaterial({
  color: '#cfa748',
  metalness: 0.2,
  roughness: 0.5,
})

// DESK CHAIR

export const deskChairLeatherMaterial = new THREE.MeshStandardMaterial({
  color: '#baa',
  map: laboratoireFinalRenderTextures.deskChair.map,
  /* metalness: 0.1, */
  roughness: 0.33,
  /* specularColor: '#fff', */
  roughnessMap: laboratoireFinalRenderTextures.deskChair.roughness,
  normalMap: laboratoireFinalRenderTextures.deskChair.normal,
})

export const deskChairLegMaterial = new THREE.MeshStandardMaterial({
  color: '#999999',
  metalness: 0.8,
  roughness: 0.1,
})

export const deskChairWheelsMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0,
  roughness: 0.6,
})

// MAC BOOK PRO

export const macBookProMaterial = new THREE.MeshStandardMaterial({
  color: '#7f8081',
  metalness: 0.4,
  roughness: 0.4,
})

export const macBookProScreenMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0,
  roughness: 0,
})

export const macBookProKeyboardMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  metalness: 0.1,
  roughness: 0.5,
})

// GLASS

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ffffff',
  roughness: 0,
  transmission: 1,
  ior: 1.5,
  /* thickness: 0.2, */
  specularIntensity: 1,
  clearcoat: 1,
  /* transparent: true,
  opacity: 0.3 */
})

// IRON

export const ironMaterial = new THREE.MeshStandardMaterial({
  color: '#E7E7E7',
  metalness: 1,
  roughness: 0.5,
})

// PORCELAIN

export const porcelainMaterial = new THREE.MeshStandardMaterial({
  color: '#fff',
  roughness: 0,
})

// SCREEN

export const screenMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.5,
})

export const screenFrameMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.1,
})

// TRANSFERT BOX

export const transfertBoxMaterial = new THREE.MeshStandardMaterial({
  color: '#eee',
  roughness: 1,
  side: THREE.DoubleSide,
})

// TRESTLE

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.map,
})

// TRINITY

export const trinityMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trinity.map,
  roughness: 1,
})

export const trinityFrameMaterial = new THREE.MeshPhysicalMaterial({
  map: laboratoireFinalRenderTextures.trinityFrame.map,
  metalness: 0.5,
  /* metalnessMap: laboratoireFinalRenderTextures.trinityFrame.roughnessMap, */
  /* roughness: 0.6, */
  roughnessMap: laboratoireFinalRenderTextures.trinityFrame.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.trinityFrame.normal,
  specularColor: '#B99445',
})

// VINYL DISC

export const vinylDiscBackMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.7,
})

// WALL CLOCK

export const mondaineWallClockMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.mondaineWallClock.map,
})

export const wallClockBrushedMetalMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.wallClockBrushedMetal.map,
  /* metalness: 0.3, */
  /* metalnessMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.roughnessMap, */
  roughnessMap:
    laboratoireFinalRenderTextures.wallClockBrushedMetal.roughnessMap,
  normalMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.normalMap,
  bumpMap: laboratoireFinalRenderTextures.wallClockBrushedMetal.bumpMap,
})

export const wallClockPlaticRedMaterial = new THREE.MeshStandardMaterial({
  color: '#C23C3E',
  roughness: 1,
})

export const wallClockPlaticBlackMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 1,
})

// WALLS

export const wallMaterial = new THREE.MeshStandardMaterial({
  color: '#fff',
})
