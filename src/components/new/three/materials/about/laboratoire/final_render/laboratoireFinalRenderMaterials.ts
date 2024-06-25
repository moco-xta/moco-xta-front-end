import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

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

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.diffuse,
})
