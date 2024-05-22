import * as THREE from 'three'

export function mainSkillsLogoMaterial(color: string) {
  return new THREE.MeshPhysicalMaterial({
    color: color,
  })
}
