import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoFigma_1: THREE.Mesh
    LogoFigma_2: THREE.Mesh
    LogoFigma_3: THREE.Mesh
    LogoFigma_4: THREE.Mesh
    LogoFigma_5: THREE.Mesh
  }
  materials: {
    ['logo_figma_#f24d1d']: THREE.MeshStandardMaterial
    ['logo_figma_#ff7162']: THREE.MeshStandardMaterial
    ['logo_figma_#a259ff']: THREE.MeshStandardMaterial
    ['logo_figma_#19bcfe']: THREE.MeshStandardMaterial
    ['logo_figma_#0dcf82']: THREE.MeshStandardMaterial
  }
}

const LogoFigma = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_FIGMA) as GLTFResult

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
        geometry={nodes.LogoFigma_1.geometry}
        material={materials['logo_figma_#f24d1d']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_2.geometry}
        material={materials['logo_figma_#ff7162']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_3.geometry}
        material={materials['logo_figma_#a259ff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_4.geometry}
        material={materials['logo_figma_#19bcfe']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_5.geometry}
        material={materials['logo_figma_#0dcf82']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoFigma.displayName = 'LogoFigma'

useGLTF.preload(glbConstants.RESOURCES.LOGO_FIGMA)

export default LogoFigma
