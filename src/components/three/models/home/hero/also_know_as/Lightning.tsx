import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as lightningComponentConstants } from '@/constants/animations/home/hero/canvas/groups/also_konw_as/lightningComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Lightning: THREE.Mesh
  }
  materials: {}
}

export const Lightning = forwardRef<THREE.Mesh, MeshProps>(function Lightning(props, ref) {
  const { nodes } = useGLTF(glbConstants.HOME.HERO.ALSO_KNOW_AS.LIGHTNING) as GLTFResult

  const lightningMaterial = new THREE.MeshStandardMaterial({
    color: lightningComponentConstants.DEFAULT.MATERIAL.COLOR,
    emissive: lightningComponentConstants.DEFAULT.MATERIAL.EMISSIVE,
    emissiveIntensity: lightningComponentConstants.DEFAULT.MATERIAL.EMISSIVE_INTENSITY,
  })

  return (
    <mesh
      ref={ref}
      name='Lightning'
      geometry={nodes.Lightning.geometry}
      material={lightningMaterial}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.ALSO_KNOW_AS.LIGHTNING)
