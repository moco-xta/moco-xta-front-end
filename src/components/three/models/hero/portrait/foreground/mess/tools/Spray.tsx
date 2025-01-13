import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as sprayComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/heartComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Spray_1: THREE.Mesh
    Spray_2: THREE.Mesh
    Spray_3: THREE.Mesh
  }
  materials: {
    ['tools_#000000_material']: THREE.MeshStandardMaterial
    ['tools_#ffffff_material']: THREE.MeshStandardMaterial
    ['tools_#0000ff_material']: THREE.MeshStandardMaterial
  }
}

export const Spray = forwardRef<THREE.Group, GroupProps>(function Spray(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.SPRAY,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = sprayComponentConstants.defaultValues.material.transparent
      materials[key].opacity = sprayComponentConstants.defaultValues.material.opacity
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='Spray_1'
        geometry={nodes.Spray_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Spray_2'
        geometry={nodes.Spray_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Spray_3'
        geometry={nodes.Spray_3.geometry}
        material={materials['tools_#0000ff_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.SPRAY)
