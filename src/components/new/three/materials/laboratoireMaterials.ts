import * as THREE from 'three'

export const ceilingLightMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 5,
})

export const tableLampMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 1,
})

/* export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 'white',
  roughness: 0,
  metalness: 1,
  reflectivity: 1,
  transparent: true,
  opacity: 0.3,
  ior: 1.52,
  transmission: 1,
  specularIntensity: 1,
  specularColor: 'white',
  clearcoat: 1
}) */

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  metalness: 0.9,
  roughness: 0.05,
  envMapIntensity: 0.9,
  clearcoat: 1,
  transparent: true,
  // transmission: .95,
  opacity: 0.1,
  reflectivity: 0.2,
  /* refractionRatio: 0.985, */
  ior: 0.9,
  /* side: THREE.BackSide, */
})

/* export const glassMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  roughness: 0,
  metalness: 1,
  transparent: true,
  opacity: 0.3,
}) */
