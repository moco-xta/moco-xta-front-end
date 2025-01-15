import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import type { TWallClockComponent } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function MinuteHand({ date, ...rest }: TWallClockComponent) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.MINUTE_HAND) as GLTFResult

  const minuteHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (date)
      minuteHandRef.current.rotation.x = THREE.MathUtils.degToRad(360 - date.getMinutes() * 6)
  }, [date])

  return (
    <group
      {...rest}
      dispose={null}
    >
      <mesh
        ref={minuteHandRef}
        geometry={nodes.MinuteHand.geometry}
        material={materials.wall_clock_black_plastic_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.MINUTE_HAND)
