import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoBlender_1: THREE.Mesh
    LogoBlender_2: THREE.Mesh
    LogoBlender_3: THREE.Mesh
  }
  materials: {
    ['icon_blender_#265787']: THREE.MeshStandardMaterial
    ['icon_blender_#ea7600']: THREE.MeshStandardMaterial
    ['icon_blender_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoBlender = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_BLENDER) as GLTFResult

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
        name='LogoBlender_1'
        geometry={nodes.LogoBlender_1.geometry}
        material={materials['icon_blender_#265787']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBlender_2'
        geometry={nodes.LogoBlender_2.geometry}
        material={materials['icon_blender_#ea7600']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBlender_3'
        geometry={nodes.LogoBlender_3.geometry}
        material={materials['icon_blender_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoBlender.displayName = 'LogoBlender'

useGLTF.preload(glbConstants.RESOURCES.LOGO_BLENDER)

export default LogoBlender
