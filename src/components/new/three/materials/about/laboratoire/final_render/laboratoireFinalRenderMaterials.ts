import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

// DESK CHAIR

export const deskChairLeatherMaterial = new THREE.MeshStandardMaterial({
  color: '#baa',
  map: laboratoireFinalRenderTextures.desk_chair.map,
  /* metalness: 0.1, */
  roughness: 0.4,
  /* specularColor: '#fff', */
  /* roughnessMap:
    laboratoireFinalRenderTextures.desk_chair.roughness, */
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

// TRESTLE

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.map,
})
