import * as THREE from 'three'

export const heliumBalloonMaterial = new THREE.MeshPhysicalMaterial({
  color: '#888888',
  metalness: 1,
  roughness: 0.2,
  reflectivity: 10,
})

export const wrapperMaterial = new THREE.MeshStandardMaterial({
  transparent: true,
  opacity: 0,
})
