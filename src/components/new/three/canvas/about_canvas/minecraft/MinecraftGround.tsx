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
    /* console.log(
      'e.point',
      Object.values(e.point).map((val) => Math.ceil(val)),
    ) */
  }

  const handleOnClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    console.log('e.point', e.point)
    console.log(
      'e.point',
      Object.values(e.point).map((val) => Math.round(val)),
    )
    const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val - 0.5))
    dispatch(addCube([x + minecraftConstants.OFFSET.X, 0, z + minecraftConstants.OFFSET.Z]))
  }

  return (
    <mesh
      material={minecraftGroundMaterial}
      position={new THREE.Vector3(0, -minecraftConstants.SCALE / 2, 0)}
      rotation={new THREE.Euler(-Math.PI / 2, 0, 0)}
      onPointerMove={handleOnPointerMove}
      onClick={handleOnClick}
      receiveShadow
      castShadow
    >
      <planeGeometry
        attach='geometry'
        args={[minecraftConstants.GROUND.SIZE.WIDTH, minecraftConstants.GROUND.SIZE.DEPTH]}
      />
    </mesh>
  )
}
