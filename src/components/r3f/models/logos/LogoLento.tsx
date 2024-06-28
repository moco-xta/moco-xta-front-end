import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoLento_1: THREE.Mesh
    LogoLento_2: THREE.Mesh
  }
  materials: {
    ['logo_lento_#303435']: THREE.MeshStandardMaterial
    ['logo_lento_#eab39b']: THREE.MeshStandardMaterial
  }
}

const LogoLento = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoLento(
  { position, rotation, scale },
  ref,
) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_LENTO) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoLento_1.geometry}
        /* material={materials['logo_lento_#303435']} */
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0x303435}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoLento_2.geometry}
        /* material={materials['logo_lento_#eab39b']} */
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xeab39b}
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_LENTO)

export default LogoLento
