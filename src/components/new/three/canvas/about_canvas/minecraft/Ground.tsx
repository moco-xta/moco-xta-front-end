import React from 'react'
import { useDispatch } from 'react-redux'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'
import { usePlane } from '@react-three/cannon'

import { AppDispatch } from '@/redux/store'
import { addCube } from '@/redux/slice/minecraftSlice'

import textures from './textures'

export default function Ground() {
  const dispatch = useDispatch<AppDispatch>()

  const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, -0.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  const groundMap = textures['groundTexture']
  groundMap.repeat.set(100, 100)

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
    dispatch(addCube([x, 0, z - 60]))
  }

  return (
    <mesh
      ref={ref}
      onPointerMove={handleOnPointerMove}
      onClick={handleOnClick}
    >
      <planeGeometry
        attach='geometry'
        args={[100, 100]}
      />
      <meshStandardMaterial
        attach='material'
        map={groundMap}
      />
    </mesh>
  )
}
