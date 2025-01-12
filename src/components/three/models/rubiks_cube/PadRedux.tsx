import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadRedux: THREE.Mesh
  }
  materials: object
}

const PadRedux = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_REDUX) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadRedux.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadRedux.displayName = 'PadRedux'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_REDUX)

export default PadRedux
