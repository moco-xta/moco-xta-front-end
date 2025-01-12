import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadHtml: THREE.Mesh
  }
  materials: object
}

const PadHtml = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_HTML) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadHtml.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadHtml.displayName = 'PadHtml'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_HTML)

export default PadHtml
