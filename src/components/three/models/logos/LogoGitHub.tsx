import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { defaultMaterial } from '../../materials/standardsMaterials'

import { default as socialsConstants } from '@/constants/canvas/socialsConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as externalLinksConstants } from '@/constants/externalLinksConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGitHub: THREE.Mesh
  }
  materials: {}
}

export function LogoGitHub(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_GITHUB) as GLTFResult

  const logoGitHubRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const [hovered, setHovered] = useState<boolean>(false)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    logoGitHubRef,
    socialsConstants.HANDLE_ON_PONTER_MOVE,
  )

  const handleOnClick = () => {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = `${externalLinksConstants.SOCIALS.GITHUB}`
    a.click()
  }

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group
      ref={logoGitHubRef}
      {...props}
      dispose={null}
    >
      <IntersectCube
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />
      <mesh
        geometry={nodes.LogoGitHub.geometry}
        material={defaultMaterial}
        receiveShadow
        castShadow
        onClick={handleOnClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_GITHUB)
