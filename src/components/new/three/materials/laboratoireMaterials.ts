import * as THREE from 'three'

export const ceilingLightMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 5
})

export const tableLampMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 1
})

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 'white',
  roughness: 0,
  metalness: 1,
  reflectivity: 1,
  transparent: true,
  opacity: 0.1,
  ior: 1.52
})