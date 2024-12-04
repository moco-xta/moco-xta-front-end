import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Sun: THREE.Mesh
  }
  materials: {
    sun_material: THREE.MeshStandardMaterial
  }
}

export const Sun = forwardRef<THREE.Mesh, MeshProps>(function Sun(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.GOBELINO.SUN) as GLTFResult
  return (
    <mesh
      ref={ref}
      name='Sun'
      geometry={nodes.Sun.geometry}
      material={materials.sun_material}
      position={[0, 0, 0]}
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.GOBELINO.SUN)
