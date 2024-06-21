import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MinuteHand: THREE.Mesh
  }
  materials: {}
}

interface MinuteHandInterface extends MeshProps {
  date: Date
}

export function MinuteHand({ date, position }: MinuteHandInterface) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.MINUTE_HAND) as GLTFResult

  const minuteHandMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 1,
  })

  const minuteHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    minuteHandRef.current.rotation.x = THREE.MathUtils.degToRad(
      360 - date.getMinutes() * 6,
    )
  }, [date])

  return (
    <mesh
      ref={minuteHandRef}
      geometry={nodes.MinuteHand.geometry}
      material={minuteHandMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.MINUTE_HAND)
