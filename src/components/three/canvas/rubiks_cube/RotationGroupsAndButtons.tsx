import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TRotationGroupsAndButtons } from '@/types/components/three/types'
import type { TRubiksCubeStatus } from '@/types/redux/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { AppDispatch, RootState } from '@/redux/store'
import {
  setRubiksCubeIsLocked /* , setRubiksCubeStatus */,
  setRubiksCubeIsMixed,
} from '@/redux/slices/rubiksCubeStateSlice'

import { Button } from '../../models/rubiks_cube/Button'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { buttonsData } from '@/data/skills/rubiks_cube/three/buttonsData'
import { mixRubiksCube } from '@/helpers/rubiksCubeHelpers'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'

export default function RotationGroupAndButtons({ rubiksCubeRef }: TRotationGroupsAndButtons) {
  const { camera } = useThree()
  const { timeline } = useGSAPTimelineContext()

  const { rubiksCubeIsLocked /* , status */ } = useSelector(
    (state: RootState) => state.rubiksCubeState,
  )

  const rotationGroupRef = useRef<THREE.Group>(null!)

  const dispatch = useDispatch<AppDispatch>()

  function handleSetRubiksCubeIsMixed() {
    dispatch(setRubiksCubeIsMixed(true))
    timeline.pause()
  }

  function handleSetRubiksCubeIsLocked(isRotating: boolean) {
    dispatch(setRubiksCubeIsLocked(isRotating))
  }

  useGSAP(
    () => {
      const cubes: THREE.Group[] = gsap.utils.toArray(rubiksCubeRef.current.children)
      cubes.reverse().forEach((cubeRef, index) => {
        timeline.fromTo(
          cubeRef.position,
          {
            x: cubeRef.position.x * 3,
            y: (cubeRef.position.y - 3 - index) * 5,
            z: cubeRef.position.z * 3,
          },
          {
            x: cubeRef.position.x,
            y: cubeRef.position.y,
            z: cubeRef.position.z,
            duration: 1,
            ease: 'power1.out',
            delay: 0.5,
          },
          index * 0.1,
        )
      })

      timeline
        .to(
          rubiksCubeRef,
          {
            keyframes: mixRubiksCube(rubiksCubeRef, rotationGroupRef, rubiksCubeData.functions),
            ease: 'none',
            duration: 12,
            onUpdate: function () {
              // camera.rotateOnWorldAxis(new THREE.Vector3(0,1,0), THREE.Math.degToRad(angle*this.ratio/100)); // this also doesn't work as expected; if we call outside gsap : camera.rotateOnWorldAxis(new THREE.Vector3(0,1,0), THREE.Math.degToRad(angle)), works perfectly
              // camera.updateProjectionMatrix();
            },
            onComplete: () => handleSetRubiksCubeIsMixed(),
          },
          'mix+=1',
        )
        .addPause()
      /* .to(
          camera.position,
          {
            x: 10,
            y: 10,
            z: 10,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onComplete: () => {
              handleGoTo('quit')
            }
          },
          'play',
        )
        .to(
          camera.position,
          {
            x: cameraDefaultValues.camera.position!.x,
            y: cameraDefaultValues.camera.position!.y,
            z: cameraDefaultValues.camera.position!.z,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onComplete: () => handleGoTo('play'),
          },
          'quit',
        ) */
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
          <group key={`rubiks_cube_buttons_group_${buttonDataIndex}`}>
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
                  buttonFunction(
                    rubiksCubeRef,
                    rotationGroupRef,
                    rubiksCubeIsLocked,
                    handleSetRubiksCubeIsLocked,
                    e,
                  )
                }
                arrow={buttonData.arrow}
                rubiksCubeIsLocked={rubiksCubeIsLocked}
              />
            ))}
          </group>
        )
      })}
      <group ref={rotationGroupRef} />
    </>
  )
}
