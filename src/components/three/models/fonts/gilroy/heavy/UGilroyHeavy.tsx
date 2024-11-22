import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    UGilroyHeavy: THREE.Mesh
  }
  materials: {}
}

export const UGilroyHeavy = forwardRef<THREE.Mesh, MeshProps>(function UGilroyHeavy(props, ref) {
  const { nodes } = useGLTF(glbConstants.FONTS.GILROY.HEAVY.U) as GLTFResult

  const defaultMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 1,
    transparent: true,
  })

  return (
    <mesh
      ref={ref}
      name='SGilroyHeavy'
      geometry={nodes.UGilroyHeavy.geometry}
      material={defaultMaterial}
      position={[1.39325, -0.012559, 0]}
      receiveShadow
      castShadow
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.FONTS.GILROY.HEAVY.U)
