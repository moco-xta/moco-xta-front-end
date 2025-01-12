import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGitHub: THREE.Mesh
  }
  materials: {
    ['logo_github_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoGithub = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_GITHUB) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoGitHub.geometry}
        material={materials['logo_github_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoGithub.displayName = 'LogoGithub'

useGLTF.preload(glbConstants.RESOURCES.LOGO_GITHUB)

export default LogoGithub
