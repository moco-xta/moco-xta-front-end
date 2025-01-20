import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TRotationGroupsAndButtons } from '@/types/components/three/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Button } from '../../models/rubiks_cube/Button'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { buttonsData } from '@/data/skills/rubiks_cube/three/buttonsData'
import { mixRubiksCube } from '@/helpers/rubiksCubeHelpers'

export default function RotationGroupAndButtons({ rubiksCubeRef }: TRotationGroupsAndButtons) {
  const { timeline } = useGSAPTimelineContext()

  const rotationGroupRef = useRef<THREE.Group>(null!)

  const [isRotating, setIsRotating] = useState<boolean>(false)

  useGSAP(
    () => {
      const cubes: THREE.Group[] = gsap.utils.toArray(rubiksCubeRef.current.children)
      cubes.forEach((cubeRef) => {
        timeline.fromTo(
          cubeRef.position,
          {
            x: cubeRef.position.x * 4,
            y: cubeRef.position.y * 4,
            z: cubeRef.position.z * 4,
          },
          {
            x: cubeRef.position.x,
            y: cubeRef.position.y,
            z: cubeRef.position.z,
            duration: 2,
            delay: 2,
          },
          'load',
        )
      })

      timeline.addPause('mix').to(
        rubiksCubeRef,
        {
          keyframes: mixRubiksCube(rubiksCubeRef, rotationGroupRef, rubiksCubeData.functions),
          ease: 'none',
          duration: 12,
        },
        'mix+=1',
      )
    },
    { scope: rubiksCubeRef },
  )

  function getFunction(name: keyof typeof rubiksCubeData.functions) {
    return rubiksCubeData.functions[name]
  }

  return (
    <>
      {buttonsData.map((buttonData, buttonDataIndex) => {
        const buttonFunction = getFunction(
          buttonData.function as keyof typeof rubiksCubeData.functions,
        )
        return (
          <>
            {buttonData.geometries.map((button, buttonIndex) => (
              <Button
                key={`rubiks_cube_button_${buttonDataIndex}_${buttonIndex}`}
                position={
                  new THREE.Vector3(button.position.X, button.position.Y, button.position.Z)
                }
                rotation={
                  new THREE.Euler(
                    THREE.MathUtils.degToRad(button.rotation.X),
                    THREE.MathUtils.degToRad(button.rotation.Y),
                    THREE.MathUtils.degToRad(button.rotation.Z),
                  )
                }
                onClick={(e) =>
                  buttonFunction(rubiksCubeRef, rotationGroupRef, isRotating, setIsRotating, e)
                }
                arrow={buttonData.arrow}
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
