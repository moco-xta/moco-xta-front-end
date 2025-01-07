import React from 'react'
import { useDispatch } from 'react-redux'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'

import { AppDispatch } from '@/redux/store'
import { addCube } from '@/redux/slice/minecraftSlice'

import texturesData from '@/data/minecraft/three/texturesData'

export default function Ground() {
  const dispatch = useDispatch<AppDispatch>()

  const groundMap = texturesData['groundTexture']
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
    // console.log('e.point', e.point)
    console.log(
      'e.point',
      Object.values(e.point).map((val) => Math.round(val)),
    )
    const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val - 0.5))
    dispatch(addCube([x, 0, z]))
  }

  return (
    <mesh
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
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
