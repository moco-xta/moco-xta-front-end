import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HourHand: THREE.Mesh
  }
  materials: {}
}

interface HourHandInterface extends MeshProps {
  date: Date
}

export function HourHand({ date, position }: HourHandInterface) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.HOUR_HAND) as GLTFResult

  const hourHandMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 1,
  })

  const hourHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    hourHandRef.current.rotation.x = THREE.MathUtils.degToRad(
      360 - (date.getHours() * 30 + date.getMinutes() * 0.5),
    )
  }, [date])

  return (
    <mesh
      ref={hourHandRef}
      geometry={nodes.HourHand.geometry}
      material={hourHandMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.HOUR_HAND)
