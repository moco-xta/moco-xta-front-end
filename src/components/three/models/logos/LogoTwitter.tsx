import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import IntersectCube from './IntersectCube'

import { defaultMaterial } from '../../materials/defaultMaterials'

import { default as socialsConstants } from '@/constants/three/socialsConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as externalLinksConstants } from '@/constants/external_links/externalLinksConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTwitter: THREE.Mesh
  }
  materials: {}
}

export function LogoTwitter(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.LOGOS.LOGO_TWITTER) as GLTFResult

  const logoTwitterRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!)

  const [hovered, setHovered] = useState<boolean>(false)

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

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group
      ref={logoTwitterRef}
      {...props}
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
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.LOGOS.LOGO_TWITTER)
