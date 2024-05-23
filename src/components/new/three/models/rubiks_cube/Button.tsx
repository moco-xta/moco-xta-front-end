import * as THREE from 'three'
import React, { useState } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Button: THREE.Mesh
    ArrowLeft: THREE.Mesh
    ArrowRight: THREE.Mesh
  }
  materials: {
    button_material: THREE.MeshStandardMaterial
  }
}

interface ButtonInterface extends GroupProps {
  arrow: string
  isRotating: boolean
}

export function Button({
  position,
  rotation,
  onClick,
  arrow,
  isRotating,
}: ButtonInterface) {
  const { nodes, materials } = useGLTF(
    gltfConstants.RUBIKS_CUBE.BUTTON,
  ) as GLTFResult

  const [hovered, setHovered] = useState<boolean>(false)

  function handleOnPointerOver() {
    setHovered(true)
  }

  function handleOnPointerLeave() {
    setHovered(false)
  }

  return (
    <group
      position={position}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.Button.geometry}
        onClick={onClick}
        onPointerOver={handleOnPointerOver}
        onPointerLeave={handleOnPointerLeave}
      >
        <meshStandardMaterial
          attach='material'
          transparent
          opacity={0}
        />
      </mesh>
      {hovered && !isRotating && (
        <>
          {arrow === 'left' ? (
            <mesh geometry={nodes.ArrowLeft.geometry}>
              <meshStandardMaterial
                attach='material'
                color={0xffffff}
                emissive={0xffffff}
                emissiveIntensity={1}
              />
            </mesh>
          ) : (
            <mesh geometry={nodes.ArrowRight.geometry}>
              <meshStandardMaterial
                attach='material'
                color={0xffffff}
                emissive={0xffffff}
                emissiveIntensity={1}
              />
            </mesh>
          )}
        </>
      )}
    </group>
  )
}

useGLTF.preload(gltfConstants.RUBIKS_CUBE.BUTTON)
