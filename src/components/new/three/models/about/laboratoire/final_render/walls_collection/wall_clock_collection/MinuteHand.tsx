import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { wallClockPlaticBlackMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

type GLTFResult = GLTF & {
  nodes: {
    MinuteHand: THREE.Mesh
  }
  materials: {}
}

interface MinuteHandInterface extends MeshProps {
  date: Date
}

export function MinuteHand({ date }: MinuteHandInterface) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.MINUTE_HAND,
  ) as GLTFResult

  const minuteHandRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    minuteHandRef.current.rotation.x = THREE.MathUtils.degToRad(360 - date.getMinutes() * 6)
  }, [date])

  return (
    <mesh
      ref={minuteHandRef}
      geometry={nodes.MinuteHand.geometry}
      material={wallClockPlaticBlackMaterial}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.MINUTE_HAND,
)
