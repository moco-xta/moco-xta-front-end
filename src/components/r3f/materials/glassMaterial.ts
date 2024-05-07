import * as THREE from 'three'

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x444444,
  roughness: 0,
  metalness: 0.9,
  reflectivity: 1,
  transparent: true,
  opacity: 0.3,
  ior: 0.9,
  clearcoat: 1,
})