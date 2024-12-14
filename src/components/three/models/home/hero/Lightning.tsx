import React, { forwardRef, useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Lightning: THREE.Mesh
  }
  materials: {}
}

export const Lightning = forwardRef<THREE.Mesh, MeshProps>(function Lightning(props, ref) {
  const { nodes } = useGLTF(glbConstants.HOME.HERO.LIGHTNING) as GLTFResult

  const material = new THREE.MeshStandardMaterial({
    color: '#fff',
    emissive: '#fff',
    emissiveIntensity: 6,
  })

  return (
    <mesh
      ref={ref}
      name='Lightning'
      geometry={nodes.Lightning.geometry}
      material={material}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.LIGHTNING)
