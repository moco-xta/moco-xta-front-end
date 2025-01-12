import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNpm_1: THREE.Mesh
    LogoNpm_2: THREE.Mesh
  }
  materials: {
    ['logo_npm_#cc3533']: THREE.MeshStandardMaterial
    ['logo_npm_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoNpm = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_NPM) as GLTFResult

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
        geometry={nodes.LogoNpm_1.geometry}
        material={materials['logo_npm_#cc3533']}
      />
      <mesh
        geometry={nodes.LogoNpm_2.geometry}
        material={materials['logo_npm_#ffffff']}
      />
    </group>
  )
})

LogoNpm.displayName = 'LogoNpm'

useGLTF.preload(glbConstants.RESOURCES.LOGO_NPM)

export default LogoNpm
