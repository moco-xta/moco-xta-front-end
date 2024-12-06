import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Smiley: THREE.Mesh
  }
  materials: {
    smiley: THREE.MeshStandardMaterial
  }
}

export const Smiley = forwardRef<THREE.Mesh, MeshProps>(function Smiley(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.HELIUM_BALLOONS.SMILEY) as GLTFResult
  return (
    <mesh
      ref={ref}
      name='Smiley'
      geometry={nodes.Smiley.geometry}
      material={materials.smiley}
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.HELIUM_BALLOONS.SMILEY)
