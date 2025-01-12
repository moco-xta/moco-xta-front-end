import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import Cube from './Cube'

import { setCubeCoordinates, setPadColor } from '@/helpers/rubiksCubeHelpers'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

export default function RubiksCube() {
  const rubiksCubeRef = useRef<THREE.Group>(null!)
  const padIndexRef = useRef<number>(0)

  const padsColors: string[] = padsData.defaultValues.material.colors.map((color) => color)

  useEffect(() => {
    if (!rubiksCubeRef.current) return

    const colorPads: THREE.Object3D<THREE.Object3DEventMap>[] = []

    rubiksCubeRef.current.children.forEach((child) => {
      if (!child.children) return

      child.children.forEach((pad) => {
        if (pad.name.startsWith('PAD') && pad instanceof THREE.Mesh) {
          colorPads.push(pad)

          const normal = new THREE.Vector3(0, 1, 0)
          const euler = new THREE.Euler(pad.rotation.x, pad.rotation.y, pad.rotation.z, 'XYZ')
          normal.applyEuler(euler)

          if (pad.material instanceof THREE.MeshStandardMaterial) {
            pad.material.color = setPadColor(normal, padsColors)
          }
        }
      })
    })
  }, [rubiksCubeRef, padsColors, setPadColor])

  useEffect(() => {
    console.log('rubiksCubeRef', rubiksCubeRef)
  }, [rubiksCubeRef])

  /* useFrame((_, delta) => {
    rubiksCubeRef.current.rotation.y += delta * 0.15
  }) */

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
