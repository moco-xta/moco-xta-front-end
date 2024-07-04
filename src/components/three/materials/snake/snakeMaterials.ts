import * as THREE from 'three'

import variables from '@/styles/variables.module.scss'

export const snakeCellMaterial = new THREE.MeshStandardMaterial({
  color: variables.nokia_8,
  transparent: true,
  /* opacity: 0.6, */
  side: THREE.DoubleSide,
})
