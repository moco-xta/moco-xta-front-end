import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { default as mainSkillsConstants } from '@/constants/new/canvas/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNextjs_1: THREE.Mesh
    LogoNextjs_2: THREE.Mesh
  }
  materials: {}
}

export default function LogoNextjs({ position, rotation, scale}: THREE.Group) {
  const { nodes } = useGLTF(
    gltfConstants.LOGOS.LOGO_NEXTJS,
  ) as GLTFResult

  const logoNextjsRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoNextjsRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoNextjsRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    >
      <mesh
        geometry={nodes.LogoNextjs_1.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0x000000}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoNextjs_2.geometry}
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
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_NEXTJS)