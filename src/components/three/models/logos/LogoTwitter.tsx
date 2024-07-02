import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { defaultMaterial } from '../../materials/standardsMaterials'

import { default as socialsConstants } from '@/constants/new/canvas/socialsConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as externalLinksConstants } from '@/constants/new/externalLinksConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTwitter: THREE.Mesh
  }
  materials: {}
}

export function LogoTwitter(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_TWITTER) as GLTFResult

  const logoTwitterRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoTwitterRef,
    socialsConstants.HANDLE_ON_PONTER_MOVE,
  )

  const handleOnClick = () => {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = `${externalLinksConstants.SOCIALS.TWITTER}`
    a.click()
  }

  return (
    <group
      ref={logoTwitterRef}
      {...props}
      dispose={null}
    >
      <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
      <mesh
        geometry={nodes.LogoTwitter.geometry}
        material={defaultMaterial}
        receiveShadow
        castShadow
        onClick={handleOnClick}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_TWITTER)
