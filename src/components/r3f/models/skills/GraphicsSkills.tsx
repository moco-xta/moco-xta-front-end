import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    GraphicsSkills_1: THREE.Mesh
    GraphicsSkills_2: THREE.Mesh
    GraphicsSkills_3: THREE.Mesh
    GraphicsSkills_4: THREE.Mesh
    GraphicsSkills_5: THREE.Mesh
    GraphicsSkills_6: THREE.Mesh
    GraphicsSkills_7: THREE.Mesh
  }
  materials: {
    ['icon_blender_#265787.001']: THREE.MeshStandardMaterial
    ['icon_blender_#ea7600.001']: THREE.MeshStandardMaterial
    ['icon_blender_#ffffff.001']: THREE.MeshStandardMaterial
    ['icon_illustrator_#320000.001']: THREE.MeshStandardMaterial
    ['icon_illustrator_#f89a01.001']: THREE.MeshStandardMaterial
    ['icon_photoshop_#051e37.001']: THREE.MeshStandardMaterial
    ['icon_photoshop_#39a9ff.001']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>

export function GraphicsSkills(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.GRAPHICS_SKILLS,
  ) as GLTFResult
  return (
    <>
      <mesh
        geometry={nodes.GraphicsSkills_1.geometry}
        material={materials['icon_blender_#265787.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_2.geometry}
        material={materials['icon_blender_#ea7600.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_3.geometry}
        material={materials['icon_blender_#ffffff.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_4.geometry}
        material={materials['icon_illustrator_#320000.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_5.geometry}
        material={materials['icon_illustrator_#f89a01.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_6.geometry}
        material={materials['icon_photoshop_#051e37.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.GraphicsSkills_7.geometry}
        material={materials['icon_photoshop_#39a9ff.001']}
        receiveShadow
        castShadow
      />
    </>
  )
}

useGLTF.preload(gltfConstants.GRAPHICS_SKILLS)
