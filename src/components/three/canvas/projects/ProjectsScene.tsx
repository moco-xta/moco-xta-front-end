import React from 'react'
import { useDispatch } from 'react-redux'
import { ThreeEvent } from '@react-three/fiber'

import { AppDispatch } from '@/redux/store'
import { setDoftargetPosition } from '@/redux/slice/playerSlice'

import Paris from './Paris'
import Maastricht from './Maastricht'
import Amsterdam from './Amsterdam'

import './index.scss'

export default function ProjectsScene() {
  const dispatch = useDispatch<AppDispatch>()

  function handleOnPointerMove(e: ThreeEvent<PointerEvent>) {
    e.stopPropagation()
    dispatch(setDoftargetPosition({ x: e.point.x, y: e.point.y, z: e.point.z }))
  }

  return (
    <group onPointerMove={handleOnPointerMove}>
      <Paris />
      <Maastricht />
      <Amsterdam />
    </group>
  )
}
