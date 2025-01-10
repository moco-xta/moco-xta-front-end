import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTheBrink: THREE.Mesh
  }
  materials: {}
}

export function LogoTheBrink(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.PROJECTS.LOGO_THE_BRINK) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoTheBrink.geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={'#ff4407'}
          roughness={1}
          metalness={0}
          emissive={'#ff4407'}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.LOGO_THE_BRINK)
