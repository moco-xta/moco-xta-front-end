import React, { useRef } from 'react'

import Cube from './Cube'

import { setCubeCoordinates } from '@/helpers/rubiks_cube/rubiksCubeHelpers'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

export default function RubiksCube() {
  const rubiksCubeRef = useRef<THREE.Group>(null!)

  return (
    <group ref={rubiksCubeRef}>
      {[...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, x) =>
        [...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, y) =>
          [...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, z) => {
            const coordinates = setCubeCoordinates(x, y, z)

            return (
              <>
                {!(coordinates.x === 0 && coordinates.y === 0 && coordinates.z === 0) && (
                  <Cube
                    key={`cube_group_${x}_${y}_${z}`}
                    coordinates={coordinates}
                  />
                )}
              </>
            )
          }),
        ),
      )}
    </group>
  )
}
