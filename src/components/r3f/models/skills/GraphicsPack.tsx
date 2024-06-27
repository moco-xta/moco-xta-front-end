import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useFBO, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Leva, folder, useControls } from 'leva'

import vertexShader from '@/components/r3f/shaders/transmission_shader/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/transmission_shader/fragmentShader.glsl'

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
    GraphicsPack: THREE.Mesh
  }
  materials: {
    ['icon_illustrator_#320000']: THREE.MeshStandardMaterial
    ['icon_illustrator_#f89a01']: THREE.MeshStandardMaterial
    ['icon_photoshop_#051e37']: THREE.MeshStandardMaterial
    ['icon_photoshop_#39a9ff']: THREE.MeshStandardMaterial
    ['icon_blender_#265787']: THREE.MeshStandardMaterial
    ['icon_blender_#ea7600']: THREE.MeshStandardMaterial
    ['icon_blender_#ffffff']: THREE.MeshStandardMaterial
    Material: THREE.MeshPhysicalMaterial
  }
}

export function GraphicsPack(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.GRAPHICS_PACK) as GLTFResult

  return (
    <>
      <group
        position={[-1.221, 0.942, 0]}
        rotation={[-0.212, 0.23, 0.41]}
      >
        <mesh
          geometry={nodes.GraphicsSkills_1.geometry}
          material={materials['icon_illustrator_#320000']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_2.geometry}
          material={materials['icon_illustrator_#f89a01']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_3.geometry}
          material={materials['icon_photoshop_#051e37']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_4.geometry}
          material={materials['icon_photoshop_#39a9ff']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_5.geometry}
          material={materials['icon_blender_#265787']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_6.geometry}
          material={materials['icon_blender_#ea7600']}
        />
        <mesh
          geometry={nodes.GraphicsSkills_7.geometry}
          material={materials['icon_blender_#ffffff']}
        />
      </group>
      <mesh
        geometry={nodes.GraphicsPack.geometry}
        material={materials.Material}
        scale={[1, 1, 0.8]}
      />
    </>
  )
}

useGLTF.preload(gltfConstants.GRAPHICS_PACK)
