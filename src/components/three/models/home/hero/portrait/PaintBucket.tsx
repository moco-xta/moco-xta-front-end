import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PaintBucket_1: THREE.Mesh
    PaintBucket_2: THREE.Mesh
    PaintBucket_3: THREE.Mesh
    PaintBucket_4: THREE.Mesh
    PaintBucket_5: THREE.Mesh
  }
  materials: {
    ['tools_#000000_material']: THREE.MeshStandardMaterial
    ['tools_#ffffff_material']: THREE.MeshStandardMaterial
    ['tools_#848484_material']: THREE.MeshStandardMaterial
    ['tools_#00ff74_material']: THREE.MeshStandardMaterial
    ['tools_#0097dc_material']: THREE.MeshStandardMaterial
  }
}

export const PaintBucket = forwardRef<THREE.Group, GroupProps>(function PaintBucket(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.PAINT_BUCKET) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        name='PaintBucket_1'
        geometry={nodes.PaintBucket_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_2'
        geometry={nodes.PaintBucket_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_3'
        geometry={nodes.PaintBucket_3.geometry}
        material={materials['tools_#848484_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_4'
        geometry={nodes.PaintBucket_4.geometry}
        material={materials['tools_#00ff74_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_5'
        geometry={nodes.PaintBucket_5.geometry}
        material={materials['tools_#0097dc_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.PAINT_BUCKET)