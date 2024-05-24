import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { RoundedCubeInterface } from '@/interfaces/new/threeInterfaces'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    RoundedCube: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>

export function RoundedCube({
  name,
  position,
  rotation,
  onPointerMove,
  onPointerLeave,
}: RoundedCubeInterface) {
  const { nodes, materials } = useGLTF(
    gltfConstants.RUBIKS_CUBE.ROUNDED_CUBE,
  ) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.RoundedCube.geometry}
      position={position}
      rotation={rotation}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'black'}
        roughness={0.4}
        transparent
        /* opacity={0.5}
        emissive={'hotpink'}
        emissiveIntensity={2} */
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.RUBIKS_CUBE.ROUNDED_CUBE)
