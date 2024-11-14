import React, { useRef } from 'react'

import { PadsInterface } from '@/interfaces/rubiksCubeInterfaces'

import { padsData } from '@/data/rubiks_cube/padsData'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

import { setPadRotation, setRoundedCubeType } from '@/helpers/rubiks_cube/rubiksCubeHelpers'

export default function Pads({ colorPadIndex, coordinates }: PadsInterface) {
  const padRef = useRef<THREE.Mesh>(null!)

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
          />
        )
      })}
    </>
  )
}
