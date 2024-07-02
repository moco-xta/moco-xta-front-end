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
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {}
}

export default function LogoAngular({ position, rotation, scale }: GroupProps) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_ANGULAR) as GLTFResult

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
    >
      <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
      <mesh
        geometry={nodes.LogoAngular_1.geometry}
        material={mainSkillsLogoMaterial('#dd002d')}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoAngular_2.geometry}
        material={mainSkillsLogoMaterial('#ffffff')}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoAngular_3.geometry}
        material={mainSkillsLogoMaterial('#c4002b')}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_ANGULAR)
