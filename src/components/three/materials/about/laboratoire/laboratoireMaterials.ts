import * as THREE from 'three'

// CEILING LAMP

export const ceilingLightMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 5,
})

// GLASS

export const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: '#777',
  roughness: 0,
  /* transmission: 1, */
  ior: 1.5,
  /* thickness: 0.2, */
  specularIntensity: 1,
  clearcoat: 1,
  transparent: true,
  opacity: 0.3,
})

// TABLE LAMP

export const tableLampMaterial = new THREE.MeshStandardMaterial({
  color: 'white',
  emissive: 'white',
  emissiveIntensity: 1,
})
