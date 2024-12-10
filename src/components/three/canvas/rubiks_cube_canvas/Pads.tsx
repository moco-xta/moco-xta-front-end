import React, { useEffect, useRef } from 'react'
import { ThreeEvent, useThree } from '@react-three/fiber'

import { PadsInterface } from '@/interfaces/rubiksCubeInterfaces'

import { padsData } from '@/data/rubiks_cube/padsData'

import { default as rubiksCubeConstants } from '@/constants/three/rubiksCubeConstants.json'

import { setPadRotation, setRoundedCubeType } from '@/helpers/rubiks_cube/rubiksCubeHelpers'

export default function Pads({ colorPadIndex, coordinates }: PadsInterface) {
  const padRef = useRef<THREE.Mesh>(null!)

  const handleOnPointerEnter = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // @ts-ignore
    padRef.current.material.emissiveIntensity = 5
    // @ts-ignore
    padRef.current.material.emissive = padRef.current.material.color
  }

  const handleOnPointerLeave = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // @ts-ignore
    padRef.current.material.emissiveIntensity = 1
    // @ts-ignore
    padRef.current.material.emissive = {
      isColor: true,
      r: 0,
      g: 0,
      b: 0,
    }
  }

  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
        const currentColorPadIndex = colorPadIndex.current
        colorPadIndex.current += 1
        const Pad =
          padsData[currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.COMPONENTS.length]
            .component
        const name =
          padsData[currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.COMPONENTS.length]
            .name

        return (
          <Pad
            ref={padRef}
            key={`rubiks_cube_pad_${name}_${currentColorPadIndex}`}
            name={name}
            rotation={setPadRotation(coordinates, index)}
            onPointerOver={handleOnPointerEnter}
            onPointerLeave={handleOnPointerLeave}
          />
        )
      })}
    </>
  )
}
