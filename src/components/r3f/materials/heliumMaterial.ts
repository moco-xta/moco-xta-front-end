import * as THREE from 'three'

export const heliumMaterial = new THREE.MeshPhysicalMaterial({
  color: '#888888',
  metalness: 1,
  roughness: 0.2,
  reflectivity: 10,
  envMapIntensity: 1.2,
})
