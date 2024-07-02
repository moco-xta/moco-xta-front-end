import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { RotationGroupInterface } from '@/interfaces/new/rubiksCubeInterfaces'

import { Button } from '../../models/rubiks_cube/Button'

import {
  handleBackCCW,
  handleBackCW,
  handleBottomCCW,
  handleBottomCW,
  handleFrontCCW,
  handleFrontCW,
  handleLeftCCW,
  handleLeftCW,
  handleRightCCW,
  handleRightCW,
  handleTopCCW,
  handleTopCW,
} from '@/helpers/rubiks_cube/rubiksCubeHelpers'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

export default function RotationGroupAndButtons({ rubiksCubeRef }: RotationGroupInterface) {
  const rotationGroupRef = useRef<THREE.Group>(null!)

  const [isRotating, setIsRotating] = useState<boolean>(false)

  const functions = {
    handleBackCCW: handleBackCCW,
    handleBackCW: handleBackCW,
    handleBottomCCW: handleBottomCCW,
    handleBottomCW: handleBottomCW,
    handleFrontCCW: handleFrontCCW,
    handleFrontCW: handleFrontCW,
    handleLeftCCW: handleLeftCCW,
    handleLeftCW: handleLeftCW,
    handleRightCCW: handleRightCCW,
    handleRightCW: handleRightCW,
    handleTopCCW: handleTopCCW,
    handleTopCW: handleTopCW,
  }

  function getFunction(name: string) {
    // @ts-ignore
    return functions[name]
  }

  return (
    <>
      {rubiksCubeConstants.RUBIKS_CUBE.BUTTONS.map((buttonCategory, buttonCategoryIndex) => {
        const buttonFunction = getFunction(buttonCategory.FUNCTION)
        return (
          <>
            {buttonCategory.GEOMETRIES.map((button, buttonIndex) => (
              <Button
                key={`rubiks_cube_button_${buttonCategoryIndex}_${buttonIndex}`}
                position={
                  new THREE.Vector3(button.POSITION.X, button.POSITION.Y, button.POSITION.Z)
                }
                rotation={
                  new THREE.Euler(
                    THREE.MathUtils.degToRad(button.ROTATION.X),
                    THREE.MathUtils.degToRad(button.ROTATION.Y),
                    THREE.MathUtils.degToRad(button.ROTATION.Z),
                  )
                }
                onClick={(e) =>
                  buttonFunction(e, rubiksCubeRef, rotationGroupRef, isRotating, setIsRotating)
                }
                arrow={buttonCategory.ARROW}
                isRotating={isRotating}
              />
            ))}
          </>
        )
      })}
      <group ref={rotationGroupRef} />
    </>
  )
}
