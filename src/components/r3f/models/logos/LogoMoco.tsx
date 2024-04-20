import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoMoco: THREE.Mesh
  }
  materials: {
    ['a.001']: THREE.MeshStandardMaterial
  }
}

const LogoMoco = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoMoco({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_MOCO) as GLTFResult

  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoMoco.geometry}
        material={materials['a.001']}
        receiveShadow
        castShadow
      >
        <meshNormalMaterial
          attach='material'
          /* color={'white'} */
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_MOCO)

export default LogoMoco
