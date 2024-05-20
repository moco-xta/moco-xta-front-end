import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'
import { GroupProps, MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    LogoMoco: THREE.Mesh
  }
  materials: {
    logo_moco_normal_texture_diffuse: THREE.MeshStandardMaterial
  }
}

interface StarInterface extends MeshProps {
  handleOnPointerMove: any
  handleOnPointerLeave: any
}

export function LogoMoco({
  position,
  rotation,
  handleOnPointerMove,
  handleOnPointerLeave,
}: StarInterface) {
  const { nodes } = useGLTF(gltfConstants.LOGO_MOCO) as GLTFResult

  return (
    <mesh
      geometry={nodes.LogoMoco.geometry}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    >
      <meshNormalMaterial attach='material' />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.LOGO_MOCO)


interface LogoMocoInterface extends GroupProps {
  handleOnPointerMove: any
  handleOnPointerLeave: any
}