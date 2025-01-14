import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import type { TWallClockComponent } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HourHand: THREE.Mesh
  }
  materials: {
    wall_clock_black_plastic_material: THREE.MeshStandardMaterial
  }
}

export function HourHand({ date, ...rest }: TWallClockComponent) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.HOUR_HAND) as GLTFResult

  const hourHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (date)
      hourHandRef.current.rotation.x = THREE.MathUtils.degToRad(
        360 - (date.getHours() * 30 + date.getMinutes() * 0.5),
      )
  }, [date])

  return (
    <group
      {...rest}
      dispose={null}
    >
      <mesh
        ref={hourHandRef}
        geometry={nodes.HourHand.geometry}
        material={materials.wall_clock_black_plastic_material}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.HOUR_HAND)
