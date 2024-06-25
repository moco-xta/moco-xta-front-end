import * as THREE from 'three'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

export const trestleMaterial = new THREE.MeshStandardMaterial({
  map: laboratoireFinalRenderTextures.trestle.diffuse,
})
