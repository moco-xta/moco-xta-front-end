import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoReactThreeDrei_1: THREE.Mesh
    LogoReactThreeDrei_2: THREE.Mesh
  }
  materials: {
    ['react-three_drei_#f10055']: THREE.MeshStandardMaterial
    ['react-three_drei_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoReactThreeDrei = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoReactThreeDrei({ position, rotation, scale }, ref) {
    const { nodes, materials } = useGLTF(
      glbConstants.HOME.HERO.LOGOS.LOGO_REACT_THREE_DREI,
    ) as GLTFResult

    return (
      <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          geometry={nodes.LogoReactThreeDrei_1.geometry}
          material={materials['react-three_drei_#f10055']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoReactThreeDrei_2.geometry}
          material={materials['react-three_drei_#ffffff']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_REACT_THREE_DREI)

export default LogoReactThreeDrei
