import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoReact: THREE.Mesh
  }
  materials: {
    ['logo_react_#61d9fb']: THREE.MeshStandardMaterial
  }
}

const LogoReact = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoReact(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.LOGO_REACT) as GltfResultType

    return (
      <group
        ref={ref}
        dispose={null}
        {...props}
      >
        <mesh
          geometry={nodes.LogoReact.geometry}
          material={materials['logo_react_#61d9fb']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.LOGO_REACT)

export default LogoReact
