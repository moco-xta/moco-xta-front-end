import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import Cube from './Cube'

import { setCubeCoordinates } from '@/helpers/rubiksCubeHelpers'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'

export default function RubiksCube() {
  const rubiksCubeRef = useRef<THREE.Group>(null!)
  const padIndexRef = useRef<number>(0)

  useFrame((_, delta) => {
    rubiksCubeRef.current.rotation.y += delta * 0.15
  })

  const cubes = useMemo(() => {
    const cubes: JSX.Element[] = []

    for (let x = 0; x < rubiksCubeData.width; x++) {
      for (let y = 0; y < rubiksCubeData.width; y++) {
        for (let z = 0; z < rubiksCubeData.width; z++) {
          const coordinates = setCubeCoordinates(x, y, z)
          if (!(coordinates.x === 0 && coordinates.y === 0 && coordinates.z === 0)) {
            cubes.push(
              <Cube
                key={`cube_group_${x}_${y}_${z}`}
                coordinates={coordinates}
                padIndexRef={padIndexRef}
              />,
            )
          }
        }
      }
    }

    return cubes
  }, [])

  return <group ref={rubiksCubeRef}>{cubes}</group>
}
