import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallClockPlaticRedMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SecondHand: THREE.Mesh
  }
  materials: {}
}

interface SecondHandInterface extends MeshProps {
  date: Date
}

export function SecondHand({ date }: SecondHandInterface) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.SECOND_HAND,
  ) as GLTFResult

  const secondHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    secondHandRef.current.rotation.x = THREE.MathUtils.degToRad(360 - date.getSeconds() * 6)
  }, [date])

  return (
    <mesh
      name='SecondHand'
      ref={secondHandRef}
      geometry={nodes.SecondHand.geometry}
      material={wallClockPlaticRedMaterial}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.SECOND_HAND,
)
