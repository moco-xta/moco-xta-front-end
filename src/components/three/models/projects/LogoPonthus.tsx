import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoPonthus: THREE.Mesh
  }
  materials: {}
}

export function LogoPonthus(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.PROJECTS.LOGO_PONTHUS) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoPonthus.geometry}
        material={nodes.LogoPonthus.material}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={'#2B245F'}
          roughness={1}
          metalness={0}
          emissive={'#2B245F'}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.LOGO_PONTHUS)
