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

/* export const matteBlueMaterial = new THREE.MeshPhysicalMaterial({
  color: '#0000ff',
  roughness: 0.9,
  metalness: 0,
  sheen: 0.2
}) */

export const matteWhiteMaterial = new THREE.MeshPhysicalMaterial({
  color: '#ffffff',
  roughness: 0.9,
  metalness: 0,
  sheen: 0.2,
})

export const skinWhiteMaterial = new THREE.MeshPhysicalMaterial({
  color: '#FFFFFF',
  metalness: 0.15,
  sheen: 1,
  sheenColor: '#ffffff',
  transmission: 1.75,
  thickness: 1,
  iridescence: 3.6,
  iridescenceIOR: 1.6,
})

export const greyMaterial = new THREE.MeshPhysicalMaterial({
  color: '#888888',
  roughness: 0,
  metalness: 0.25,
  specularIntensity: 1,
  specularColor: '#888888',
  reflectivity: 1,
  clearcoat: 0.75,
  iridescence: 0.6,
  iridescenceIOR: 1.6,
  fog: true,
})

export const matteBlackMaterial = new THREE.MeshPhysicalMaterial({
  color: '#000000',
  metalness: 0.25,
  sheen: 1,
  sheenColor: '#ffffff',
  transmission: 1,
  thickness: 1,
})

/* export const fluorescentYellowMaterial = new THREE.MeshPhysicalMaterial({
  color: '#d6fa51',
  iridescenceIOR: 1.6,
  metalness: 0.25,
  specularIntensity: 1,
  specularColor: '#d6fa51',
  reflectivity: 1,
  clearcoat: 0.75,
  iridescence: 0.6,
  roughness: 0.5,
  fog: true,
}) */

export const metalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xaaaaaa, // Light gray metal color
  metalness: 1.0, // Full metal
  roughness: 0.2, // Low roughness for a shiny look
  reflectivity: 1, // Maximum reflectivity
  clearcoat: 0.5, // Adds a clear coat layer for extra realism
  clearcoatRoughness: 0.1, // Slightly rough clear coat
})

export const cameraShakeMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color('#FFFFFF').convertSRGBToLinear(),
  roughness: 0,
  clearcoat: 1,
  clearcoatRoughness: 0,
  iridescence: 0.6,
  iridescenceIOR: 1.6,
})
