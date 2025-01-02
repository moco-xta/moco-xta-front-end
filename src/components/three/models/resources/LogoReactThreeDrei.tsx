import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoReactThreeDrei_1: THREE.Mesh
    LogoReactThreeDrei_2: THREE.Mesh
  }
  materials: {
    ['react-three_drei_#f10055']: THREE.MeshStandardMaterial
    ['react-three_drei_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoReactThreeDrei = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_REACT_THREE_DREI) as GLTFResult

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
        geometry={nodes.LogoReactThreeDrei_1.geometry}
        material={materials['react-three_drei_#f10055']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoReactThreeDrei_2.geometry}
        material={materials['react-three_drei_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_REACT_THREE_DREI)

export default LogoReactThreeDrei
