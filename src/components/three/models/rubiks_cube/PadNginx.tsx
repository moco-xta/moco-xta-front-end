import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadNginx: THREE.Mesh
  }
  materials: object
}

const PadNginx = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_NGINX) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadNginx.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadNginx.displayName = 'PadNginx'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_NGINX)

export default PadNginx
