import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPicker_1: THREE.Mesh
    ColorPicker_2: THREE.Mesh
    ColorPicker_3: THREE.Mesh
    ColorPicker_4: THREE.Mesh
    ColorPicker_5: THREE.Mesh
  }
  materials: {
    ['tools_#000000_material']: THREE.MeshStandardMaterial
    ['tools_#ffffff_material']: THREE.MeshStandardMaterial
    ['tools_#848484_material']: THREE.MeshStandardMaterial
    ['tools_#00ff74_material']: THREE.MeshStandardMaterial
    ['tools_#0097dc_material']: THREE.MeshStandardMaterial
  }
}

export const ColorPicker = forwardRef<THREE.Group, GroupProps>(function ColorPicker(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.COLOR_PICKER) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='ColorPicker_1'
        geometry={nodes.ColorPicker_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_2'
        geometry={nodes.ColorPicker_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_3'
        geometry={nodes.ColorPicker_3.geometry}
        material={materials['tools_#848484_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_4'
        geometry={nodes.ColorPicker_4.geometry}
        material={materials['tools_#00ff74_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_5'
        geometry={nodes.ColorPicker_5.geometry}
        material={materials['tools_#0097dc_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.COLOR_PICKER)