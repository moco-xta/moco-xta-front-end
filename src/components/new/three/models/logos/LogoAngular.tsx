import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { default as mainSkillsConstants } from '@/constants/new/canvas/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {}
}

export default function LogoAngular({ position, rotation, scale}: THREE.Group) {
  const { nodes } = useGLTF(
    gltfConstants.LOGOS.LOGO_ANGULAR,
  ) as GLTFResult

  const logoAngularRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoAngularRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoAngularRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    >
      <mesh
        geometry={nodes.LogoAngular_1.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xdd002d}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoAngular_2.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xffffff}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoAngular_3.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xc4002b}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_ANGULAR)