import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { Cube } from './Cube'

export default function Cubes() {
  const { cubes } = useSelector((state: RootState) => state.minecraft)

  return (
    <>
      {cubes.map((cube) => (
        <Cube {...cube} />
      ))}
    </>
  )
}
