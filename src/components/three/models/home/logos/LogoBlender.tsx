import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoBlender_1: THREE.Mesh
    LogoBlender_2: THREE.Mesh
    LogoBlender_3: THREE.Mesh
  }
  materials: {
    ['icon_blender_#265787']: THREE.MeshStandardMaterial
    ['icon_blender_#ea7600']: THREE.MeshStandardMaterial
    ['icon_blender_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoBlender = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoBlender(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.LOGO_BLENDER) as GltfResultType

    return (
      <group
        ref={ref}
        dispose={null}
        {...props}
      >
        <mesh
          geometry={nodes.LogoBlender_1.geometry}
          material={materials['icon_blender_#265787']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoBlender_2.geometry}
          material={materials['icon_blender_#ea7600']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoBlender_3.geometry}
          material={materials['icon_blender_#ffffff']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.LOGO_BLENDER)

export default LogoBlender
