import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoIllustrator_1: THREE.Mesh
    LogoIllustrator_2: THREE.Mesh
  }
  materials: {
    ['icon_illustrator_#320000']: THREE.MeshStandardMaterial
    ['icon_illustrator_#f89a01']: THREE.MeshStandardMaterial
  }
}

const LogoIllustrator = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_ILLUSTRATOR) as GLTFResult

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
        geometry={nodes.LogoIllustrator_1.geometry}
        material={materials['icon_illustrator_#320000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoIllustrator_2.geometry}
        material={materials['icon_illustrator_#f89a01']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_ILLUSTRATOR)

export default LogoIllustrator
