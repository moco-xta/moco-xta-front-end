import * as THREE from 'three'

export const defaultMaterial = new THREE.MeshStandardMaterial({
  color: '#ffffff',
  roughness: 1,
  transparent: true,
})

export const glassSimpleMaterial = new THREE.MeshPhysicalMaterial({
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

export const glassFramesMaterial = new THREE.MeshPhysicalMaterial({
  color: '#333',
  roughness: 0.05,
  reflectivity: 3,
  transparent: true,
  opacity: 0.4,
})
