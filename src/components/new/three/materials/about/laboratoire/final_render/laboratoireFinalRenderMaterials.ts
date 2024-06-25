import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

// DESK CHAIR

export const deskChairLeatherMaterial = new THREE.MeshStandardMaterial({
  color: '#baa',
  map: laboratoireFinalRenderTextures.desk_chair.map,
  /* metalness: 0.1, */
  roughness: 0.33,
  /* specularColor: '#fff', */
  roughnessMap: laboratoireFinalRenderTextures.desk_chair.roughness,
  normalMap: laboratoireFinalRenderTextures.desk_chair.normal,
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
  color: '#C5C5C3',
  roughness: 1,
  side: THREE.DoubleSide,
})

// TRESTLE

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.map,
})

// VINYL DISC

export const vinylDiscBackMaterial = new THREE.MeshStandardMaterial({
  color: '#000',
  roughness: 0.7,
})
