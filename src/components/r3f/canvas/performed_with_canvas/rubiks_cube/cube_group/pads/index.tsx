import React from 'react'

import { PadsInterface } from '@/interfaces/r3fInterfaces'

import { padsData } from '@/data/padsData'

import { default as rubiksCubeConstants } from '@/constants/rubiksCubeConstants.json'

import { setPadRotation, setRoundedCubeType } from '@/helpers/r3fHelpers'

export default function Pads({ colorPadIndex, coordinates }: PadsInterface) {
  return (
    <>
      {[...Array(setRoundedCubeType(coordinates))].map((_, index) => {
        const currentColorPadIndex = colorPadIndex.current
        colorPadIndex.current += 1
        const Pad =
          padsData[
            currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.length
          ].component
        const colorPadName =
          padsData[
            currentColorPadIndex % rubiksCubeConstants.RUBIKS_CUBE.PADS.length
          ].name
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
