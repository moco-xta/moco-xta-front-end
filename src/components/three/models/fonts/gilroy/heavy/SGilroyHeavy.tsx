import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SGilroyHeavy: THREE.Mesh
  }
  materials: {}
}

export const SGilroyHeavy = forwardRef<THREE.Mesh, MeshProps>(function SGilroyHeavy(props, ref) {
  const { nodes } = useGLTF(glbConstants.FONTS.GILROY.HEAVY.S) as GLTFResult

  const defaultMaterial = new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 1,
    transparent: true,
  })

  return (
    <mesh
      ref={ref}
      name='SGilroyHeavy'
      geometry={nodes.SGilroyHeavy.geometry}
      material={defaultMaterial}
      position={[0, 0, 0]}
      receiveShadow
      castShadow
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.FONTS.GILROY.HEAVY.S)
