import React from 'react'
import { useGLTF } from '@react-three/drei'

export function SkillsPattern(props) {
  const { nodes, materials } = useGLTF('/gltf/skills/SkillsPattern.gltf')
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Server.geometry}
        material={materials.default_material}
        position={[-7.5, 0, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Laptop.geometry}
        material={materials.default_material}
        position={[7.5, 3, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Browser.geometry}
        material={materials.default_material}
        position={[22.5, 3, 0]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Database.geometry}
        material={materials.default_material}
        position={[-22.5, 1, 0]}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload('/gltf/skills/SkillsPattern.gltf')
