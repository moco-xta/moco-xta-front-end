import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { default as LargeScreenBalloonsWrapper } from './large_screen/BalloonsWrapper'
import { default as LargeScreenHeliumBalloons } from './large_screen/HeliumBalloons'
import { default as SmallScreenBalloonsWrapper } from './small_screen/BalloonsWrapper'
import { default as SmallScreenHeliumBalloons } from './small_screen/HeliumBalloons'

import { default as globalConstants } from '@/constants/globalConstants.json'
import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { LiraTest001 } from '../../models/lira/LiraTest001'
import { Face } from '../../models/sketchfab/Face'

export default function HeroScene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = scroll.offset * sequenceLength
  })

  const { isLargeScreen } = useIsLargeScreen()

  const setCameraZPosition = (innerWidth: number) => {
    return (
      heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MIN_POSITION -
      ((heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MIN_POSITION -
        heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.MAX_POSITION) /
        (heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.LARGER_LIMIT -
          globalConstants.DESKTOP_LIMIT)) *
        (innerWidth - globalConstants.DESKTOP_LIMIT)
    )
  }

  return (
    <>
      <PerspectiveCamera
        theatreKey='Camera'
        /* ref={perspectiveCameraRef} */
        makeDefault
        position={
          isLargeScreen
            ? [
                heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.INITIAL_POSITION.X,
                heroConstants.PERSPECTIVE_CAMERA.LARGE_SCREEN.INITIAL_POSITION.Y,
                setCameraZPosition(window.innerWidth),
              ]
            : [
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.X,
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.Y,
                heroConstants.PERSPECTIVE_CAMERA.SMALL_SCREEN.INITIAL_POSITION.Z,
              ]
        }
        fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <Face />
      {/* <LiraTest001 /> */}
      {/* {isLargeScreen ? (
        <group>
          <LargeScreenBalloonsWrapper />
          <LargeScreenHeliumBalloons />
        </group>
      ) : (
        <group>
          <SmallScreenBalloonsWrapper />
          <SmallScreenHeliumBalloons />
        </group>
      )} */}
    </>
  )
}
