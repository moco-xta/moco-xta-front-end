import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import type { TWallClockComponent } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SecondHand: THREE.Mesh
  }
  materials: {
    wall_clock_red_plastic_material: THREE.MeshStandardMaterial
  }
}

export function SecondHand({ date, ...rest }: TWallClockComponent) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SECOND_HAND) as GLTFResult

  const secondHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (date)
      secondHandRef.current.rotation.x = THREE.MathUtils.degToRad(360 - date.getSeconds() * 6)
  }, [date])

  return (
    <group
      {...rest}
      dispose={null}
    >
      <mesh
        ref={secondHandRef}
        geometry={nodes.SecondHand.geometry}
        material={materials.wall_clock_red_plastic_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SECOND_HAND)
