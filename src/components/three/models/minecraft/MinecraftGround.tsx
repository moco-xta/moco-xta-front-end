import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MinecraftGround: THREE.Mesh
    Plane001: THREE.Mesh
  }
  materials: {
    minecraft_forest_ground: THREE.MeshStandardMaterial
  }
}

export function MinecraftGround(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.MINECRAFT.MINECRAFT_GROUND) as GLTFResult
  return (
    <group
      {...props}
      scale={0.75}
      dispose={null}
    >
      <mesh
        geometry={nodes.MinecraftGround.geometry}
        material={materials.minecraft_forest_ground}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.MINECRAFT.MINECRAFT_GROUND)
