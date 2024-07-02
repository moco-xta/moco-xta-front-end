import React from 'react'
import { useDispatch } from 'react-redux'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

import { AppDispatch } from '@/redux/store'
import { addCube } from '@/redux/slice/minecraftSlice'

import { minecraftGroundMaterial } from '../../../materials/about/minecraft/minecraftMaterials'

import { default as minecraftConstants } from '@/constants/new/canvas/about/minecraft/minecraftConstants.json'

export default function MinecraftGround() {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnPointerMove = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
  }

  const handleOnClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    const [x, y, z] = Object.values(e.point).map(
      (val, index) =>
        Math.round(
          ((val - minecraftConstants.OFFSET[index]) / minecraftConstants.SCALE) *
            (1 / minecraftConstants.SCALE),
        ) * minecraftConstants.SCALE,
    )
    dispatch(addCube([x, 0, z]))
  }

  return (
    <mesh
      material={minecraftGroundMaterial}
      position={new THREE.Vector3(0, -minecraftConstants.SCALE / 2, 0)}
      rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
      receiveShadow
      castShadow
      onPointerMove={handleOnPointerMove}
      onClick={handleOnClick}
    >
      <planeGeometry
        attach='geometry'
        args={[minecraftConstants.GROUND.SIZE.WIDTH, minecraftConstants.GROUND.SIZE.DEPTH]}
      />
    </mesh>
  )
}
