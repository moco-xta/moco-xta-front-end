import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {
    ['logo_angular_#dd002d']: THREE.MeshStandardMaterial
    ['logo_angular_#ffffff']: THREE.MeshStandardMaterial
    ['logo_angular_#c4002b']: THREE.MeshStandardMaterial
  }
}

const LogoAngular = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoAngular(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.LOGO_ANGULAR) as GLTFResult

    return (
      <group
        ref={ref}
        dispose={null}
        {...props}
      >
        <mesh
          geometry={nodes.LogoAngular_1.geometry}
          material={materials['logo_angular_#dd002d']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoAngular_2.geometry}
          material={materials['logo_angular_#ffffff']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoAngular_3.geometry}
          material={materials['logo_angular_#c4002b']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.LOGO_ANGULAR)

export default LogoAngular
