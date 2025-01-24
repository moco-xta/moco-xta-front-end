import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { TRotationGroupsAndButtons } from '@/types/components/three/types'
import type { TRubiksCubeStatus } from '@/types/redux/types'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { AppDispatch, RootState } from '@/redux/store'
import { setRubiksCubeIsRotating, setRubiksCubeStatus } from '@/redux/slices/rubiksCubeStateSlice'

import { Button } from '../../models/rubiks_cube/Button'

import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'
import { buttonsData } from '@/data/skills/rubiks_cube/three/buttonsData'
import { mixRubiksCube } from '@/helpers/rubiksCubeHelpers'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'

export default function RotationGroupAndButtons({ rubiksCubeRef }: TRotationGroupsAndButtons) {
  const { camera } = useThree()
  const { timeline } = useGSAPTimelineContext()

  const { isRotating, status } = useSelector((state: RootState) => state.rubiksCubeState)

  const rotationGroupRef = useRef<THREE.Group>(null!)

  const dispatch = useDispatch<AppDispatch>()

  function handleSetRubiksCubeIsRotating(isRotating: boolean) {
    dispatch(setRubiksCubeIsRotating(isRotating))
  }

  useEffect(() => {
    console.log('timeline', timeline)
    console.log('status', status)
  }, [status, timeline])

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

      // gsap.set(camera.position, { ...cameraDefaultValues.camera.position })

      function animateCamera() {
        const { x, y, z } = cameraDefaultValues.camera.position!
        gsap.to(camera.position, { x: x, y, z, duration: 1, ease: 'power1.out' })
      }

      function goToIsPlaying() {
        timeline.seek('isPlaying').pause()
      }

      function goToMix() {
        timeline.seek('mix').pause()
      }

      timeline
        .addPause('mix')
        // .add(animateCamera)
        .to(
          camera.position,
          {
            x: 10,
            y: 10,
            z: 10,
            duration: 1,
            ease: 'power1.out',
          },
          'mix+=0.2',
        )
        .to(
          rubiksCubeRef,
          {
            keyframes: mixRubiksCube(rubiksCubeRef, rotationGroupRef, rubiksCubeData.functions),
            ease: 'none',
            duration: 12,
            onComplete: () => {
              dispatch(setRubiksCubeStatus('playing' as TRubiksCubeStatus))
              goToIsPlaying()
            },
          },
          'mix+=1.2',
        )
        .addPause('isPlaying')
        .to(
          camera.position,
          {
            ...cameraDefaultValues.camera.position,
            duration: 1,
            ease: 'power1.out',
            onComplete: () => goToMix(),
          },
          'isPlaying',
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
                    isRotating,
                    handleSetRubiksCubeIsRotating,
                    e,
                  )
                }
                arrow={buttonData.arrow}
                isPlaying={status === ('playing' as TRubiksCubeStatus)}
                isRotating={isRotating}
              />
            ))}
          </group>
        )
      })}
      <group ref={rotationGroupRef} />
    </>
  )
}
