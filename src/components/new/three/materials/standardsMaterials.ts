import * as THREE from 'three'

export const defaultMaterial = new THREE.MeshStandardMaterial({
  color: '#ffffff',
  roughness: 1,
})

export const ironSimpleMaterial = new THREE.MeshStandardMaterial({
  color: '#E7E7E7',
  metalness: 1,
  roughness: 0.5,
})
