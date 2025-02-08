import * as THREE from 'three'

const ligne4Material = new THREE.MeshPhysicalMaterial({
  color: '#B53E87',
  roughness: 0.5,
  // metalness: 0.5,
  side: THREE.DoubleSide,
})

const ligne12Material = new THREE.MeshPhysicalMaterial({
  color: '#012515',
  roughness: 0.5,
  // metalness: 0.5,
  side: THREE.DoubleSide,
})

const metroParisWhite = new THREE.MeshPhysicalMaterial({
  color: '#FFFFFF',
  roughness: 0.5,
  // metalness: 0.5,
  side: THREE.DoubleSide,
})

const metroParisBlue = new THREE.MeshPhysicalMaterial({
  color: '#0C208F',
  roughness: 0.5,
  // metalness: 0.5,
  side: THREE.DoubleSide,
})

const metroParisDarkBrown = new THREE.MeshPhysicalMaterial({
  color: '#594a3b',
  roughness: 0.5,
  // metalness: 0.5,
  side: THREE.DoubleSide,
})

export { ligne4Material, ligne12Material, metroParisWhite, metroParisBlue, metroParisDarkBrown }
