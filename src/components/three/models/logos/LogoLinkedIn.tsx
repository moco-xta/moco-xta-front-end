import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { defaultMaterial } from '../../materials/standardsMaterials'

import { default as socialsConstants } from '@/constants/new/canvas/socialsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoLinkedIn: THREE.Mesh
  }
  materials: {}
}

export function LogoLinkedIn(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_LINKED_IN) as GLTFResult

  const logoLinkedInRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoLinkedInRef,
    socialsConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={logoLinkedInRef}
      {...props}
      dispose={null}
    >
      <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
      <mesh
        geometry={nodes.LogoLinkedIn.geometry}
        material={defaultMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_LINKED_IN)
