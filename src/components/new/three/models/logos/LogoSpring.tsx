import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { default as mainSkillsConstants } from '@/constants/new/canvas/mainSkillsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring_1: THREE.Mesh
    LogoSpring_2: THREE.Mesh
  }
  materials: {}
}

export default function LogoSpring({ position, rotation, scale}: THREE.Group) {
  const { nodes } = useGLTF(
    gltfConstants.LOGOS.LOGO_SPRING,
  ) as GLTFResult

  const logoSpringRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoSpringRef,
    mainSkillsConstants.HANDLE_ON_PONTER_MOVE,
  )

  const geometry = new THREE.BoxGeometry()
  geometry.computeBoundingBox()
  const material = new THREE.MeshBasicMaterial()
  material.visible = false

  return (
    <group
      ref={logoSpringRef}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <group
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
      >
        <mesh geometry={geometry} material={material} />
      </group>
      <mesh
        geometry={nodes.LogoSpring_1.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0x74b61d}
          roughness={0.5}
          metalness={0.5}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
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

useGLTF.preload(gltfConstants.LOGOS.LOGO_SPRING)