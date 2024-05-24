import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { mainSkillsLogoMaterial } from '../../materials/mainSkillsLogoMaterial'

import { default as mainSkillsConstants } from '@/constants/new/canvas/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring_1: THREE.Mesh
    LogoSpring_2: THREE.Mesh
  }
  materials: {}
}

export default function LogoSpring({ position, rotation, scale }: GroupProps) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_SPRING) as GLTFResult

  const logoSpringRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoSpringRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoSpringRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
      <mesh
        geometry={nodes.LogoSpring_1.geometry}
        material={mainSkillsLogoMaterial('#74b61d')}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
        material={mainSkillsLogoMaterial('#ffffff')}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_SPRING)
