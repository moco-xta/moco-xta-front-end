import * as THREE from 'three'

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#555',
  roughness: 0,
  /* transmission: 1, */
  ior: 1.5,
  /* thickness: 0.2, */
  specularIntensity: 1,
  clearcoat: 1,
  transparent: true,
  opacity: 0.3,
})
