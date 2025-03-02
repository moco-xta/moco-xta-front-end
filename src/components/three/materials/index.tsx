import * as THREE from 'three'

export const getMatteMaterial = (color: string) => {
  return new THREE.MeshPhysicalMaterial({
    color: color,
    roughness: 0.9,
    metalness: 0,
    sheen: 0.2,
  })
}

export const getGlossyMaterial = (color: string) => {
  return new THREE.MeshPhysicalMaterial({
    color: color,
    roughness: 0,
    metalness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0,
  })
}

export const getSkinMaterial = (color: string) => {
  return new THREE.MeshPhysicalMaterial({
    color: color,
    metalness: 0.15,
    sheen: 1,
    sheenColor: '#ffffff',
    transmission: 0.2,
    thickness: 0.1,
    // iridescence: 1.6,
    // iridescenceIOR: 1.6,
  })
}

export const fluorescentYellowMaterial = new THREE.MeshPhysicalMaterial({
  color: '#d6fa51',
  sheen: 1,
  sheenColor: '#FFFFFF',
  transmission: 0.2,
  thickness: 0.1,
  iridescence: 0.6,
  iridescenceIOR: 1.6,
})

export const oilMaterial = new THREE.MeshPhysicalMaterial({
  color: '#222222',
  roughness: 0.25,
  metalness: 0.25,
  specularIntensity: 1,
  specularColor: '#000000',
  reflectivity: 1,
  clearcoat: 0.75,
  iridescence: 0.6,
  iridescenceIOR: 1.6,
  fog: true,
})
