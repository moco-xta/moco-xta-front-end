import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoPostman_1: THREE.Mesh
    LogoPostman_2: THREE.Mesh
  }
  materials: {
    ['logo_postman_#000000']: THREE.MeshStandardMaterial
    ['logo_postman_#fe6c37']: THREE.MeshStandardMaterial
  }
}

const LogoPostman = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_POSTMAN) as GLTFResult

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
        geometry={nodes.LogoPostman_1.geometry}
        material={materials['logo_postman_#000000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoPostman_2.geometry}
        material={materials['logo_postman_#fe6c37']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_POSTMAN)

export default LogoPostman
