import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PhoneNumberInput: THREE.Mesh
  }
  materials: {}
}

export const PhoneNumberInput = forwardRef<THREE.Mesh, MeshProps>(
  function PhoneNumberInput(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.PHONE_NUMBER_INPUT) as GLTFResult

    const material = new THREE.MeshStandardMaterial({
      color: 'white',
      roughness: 0,
      transparent: true,
      opacity: 0,
    })

    return (
      <mesh
        ref={ref}
        name='PhoneNumberInput'
        geometry={nodes.PhoneNumberInput.geometry}
        material={material}
        receiveShadow
        castShadow
        {...props}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.PHONE_NUMBER_INPUT)
