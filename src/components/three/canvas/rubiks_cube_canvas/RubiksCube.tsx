import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import CubeGroup from './CubeGroup'
import RotationGroupsAndButtons from './RotationGroupsAndButtons'

import { setCubeCoordinates, setPadColor } from '@/helpers/rubiks_cube/rubiksCubeHelpers'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

export default function RubiksCube() {
  const rubiksCubeRef = useRef<THREE.Group>(null!)
  const colorPadIndex = useRef<number>(0)

  const colors: string[] = rubiksCubeConstants.RUBIKS_CUBE.PADS_COLORS.map((color) => color)

  useEffect(() => {
    const colorPads: THREE.Object3D<THREE.Object3DEventMap>[] = []
    rubiksCubeRef.current.children.forEach((child) => {
      child.children
        .filter((child) => child.name.startsWith('color_pad_'))
        .forEach((child) => {
          colorPads.push(child)
          const normal = new THREE.Vector3(0, 1, 0)
          const euler = new THREE.Euler(child.rotation.x, child.rotation.y, child.rotation.z, 'XYZ')
          normal.applyEuler(euler)
          // @ts-ignore
          child.material.color = setPadColor(normal, colors)
        })
    })
  }, [rubiksCubeRef, colors])

  return (
    <>
      <group ref={rubiksCubeRef}>
        {[...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, x) =>
          [...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, y) =>
            [...Array(rubiksCubeConstants.RUBIKS_CUBE.WIDTH)].map((_, z) => {
              const coordinates = setCubeCoordinates(x, y, z)

              return (
                <>
                  {!(coordinates.x === 0 && coordinates.y === 0 && coordinates.z === 0) && (
                    <CubeGroup
                      key={`cube_group_${x}_${y}_${z}`}
                      coordinates={coordinates}
                      colorPadIndex={colorPadIndex}
                    />
                  )}
                </>
              )
            }),
          ),
        )}
      </group>
      <RotationGroupsAndButtons rubiksCubeRef={rubiksCubeRef} />
    </>
  )
}
