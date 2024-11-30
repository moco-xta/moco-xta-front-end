import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Axis_1: THREE.Mesh
    Axis_2: THREE.Mesh
    Axis_3: THREE.Mesh
    Axis_4: THREE.Mesh
  }
  materials: {
    landmark: THREE.MeshStandardMaterial
    x_axis: THREE.MeshStandardMaterial
    y_axis: THREE.MeshStandardMaterial
    z_axis: THREE.MeshStandardMaterial
  }
}

export function Axis(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.HOME.AXIS) as GLTFResult

  const material = new THREE.MeshStandardMaterial({
    color: 'white',
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        name='Axis_1'
        geometry={nodes.Axis_1.geometry}
        material={material}
      />
      <mesh
        name='Axis_2'
        geometry={nodes.Axis_2.geometry}
        material={material}
      />
      <mesh
        name='Axis_3'
        geometry={nodes.Axis_3.geometry}
        material={material}
      />
      <mesh
        name='Axis_4'
        geometry={nodes.Axis_4.geometry}
        material={material}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.HOME.AXIS)
