import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SecondHand: THREE.Mesh
  }
  materials: {}
}

interface SecondHandInterface extends MeshProps {
  date: Date
}

export function SecondHand({ date, position }: SecondHandInterface) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SECOND_HAND) as GLTFResult

  const secondHandMaterial = new THREE.MeshStandardMaterial({
    color: '#C23C3E',
    roughness: 1,
  })

  const secondHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    secondHandRef.current.rotation.x = THREE.MathUtils.degToRad(
      360 - date.getSeconds() * 6,
    )
  }, [date])

  return (
    <mesh
      ref={secondHandRef}
      geometry={nodes.SecondHand.geometry}
      material={secondHandMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SECOND_HAND)
