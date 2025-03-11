import React, { useState } from 'react'
import type { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export type TButton = GroupProps & {
  arrow: string
  rubiksCubeIsLocked: boolean
  rubiksCubeIsRotating: boolean
} // TODO: Add to types

export function Button({
  onClick,
  arrow,
  rubiksCubeIsLocked,
  rubiksCubeIsRotating,
  ...rest
}: TButton) {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.BUTTON) as GLTFResult

  const [hovered, setHovered] = useState<boolean>(false)

  function handleOnPointerOver() {
    setHovered(true)
  }

  function handleOnPointerLeave() {
    setHovered(false)
  }

  return (
    <group {...rest}>
      <mesh
        visible={!rubiksCubeIsRotating && !rubiksCubeIsLocked}
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
      {hovered && !rubiksCubeIsRotating && !rubiksCubeIsLocked && (
        <>
          {arrow === 'left' ? (
            <mesh geometry={nodes.ArrowLeft.geometry}>
              <meshStandardMaterial
                attach='material'
                color={'#fff'}
                emissive={'#fff'}
                emissiveIntensity={1}
              />
            </mesh>
          ) : (
            <mesh geometry={nodes.ArrowRight.geometry}>
              <meshStandardMaterial
                attach='material'
                color={'#fff'}
                emissive={'#fff'}
                emissiveIntensity={1}
              />
            </mesh>
          )}
        </>
      )}
    </group>
  )
}

useGLTF.preload(glbConstants.RUBIKS_CUBE.BUTTON)
