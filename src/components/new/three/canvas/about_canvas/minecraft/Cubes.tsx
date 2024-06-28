import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { Cube } from './Cube'

export default function Cubes() {
  const { cubes } = useSelector((state: RootState) => state.minecraft)

  return (
    <>
      {cubes.map((cube) => (
        <Cube
          key={`minecraft_cube_x${cube.position[0]}_y${cube.position[1]}_z${cube.position[2]}`}
          {...cube}
        />
      ))}
    </>
  )
}
