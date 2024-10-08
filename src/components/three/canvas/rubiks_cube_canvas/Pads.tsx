import React from 'react'

import { PadsInterface } from '@/interfaces/rubiksCubeInterfaces'

import { padsData } from '@/data/rubiks_cube/padsData'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

import { setPadRotation, setRoundedCubeType } from '@/helpers/rubiks_cube/rubiksCubeHelpers'

export default function Pads({ colorPadIndex, coordinates }: PadsInterface) {
  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
        const currentColorPadIndex = colorPadIndex.current
        colorPadIndex.current += 1
        const Pad =
          padsData[currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.length].component
        const colorPadName =
          padsData[currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.length].name
        return (
          <Pad
            key={`rubiks_cube_pad_${colorPadName}_${currentColorPadIndex}`}
            name={colorPadName}
            rotation={setPadRotation(coordinates, index)}
          />
        )
      })}
    </>
  )
}
