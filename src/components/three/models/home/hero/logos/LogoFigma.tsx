import * as THREE from 'three'
import React, { forwardRef } from 'react'
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
    ['logo_figma_#19bcfe']: THREE.MeshStandardMaterial
    ['logo_figma_#a259ff']: THREE.MeshStandardMaterial
    ['logo_figma_#0dcf82']: THREE.MeshStandardMaterial
  }
}

const LogoFigma = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoFigma(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_FIGMA) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
      >
        <mesh
          geometry={nodes.LogoFigma_1.geometry}
          material={materials['logo_figma_#f24d1d']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoFigma_2.geometry}
          material={materials['logo_figma_#ff7162']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoFigma_3.geometry}
          material={materials['logo_figma_#19bcfe']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoFigma_4.geometry}
          material={materials['logo_figma_#a259ff']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoFigma_5.geometry}
          material={materials['logo_figma_#0dcf82']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_FIGMA)

export default LogoFigma
