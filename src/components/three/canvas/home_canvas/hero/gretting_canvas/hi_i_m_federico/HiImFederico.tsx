import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import HiText from './texts/HiText'
import ImText from './texts/ImText'
import FedericoText from './texts/FedericoText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface HiImFedericoInterface {
  timeline: GSAPTimeline
}

export default function HiImFederico({ timeline }: HiImFedericoInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.HI_I_M_FEDERICO.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const hiImFedericoSceneGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline
        .to(
          hiImFedericoSceneGroupRef.current.position,
          {
            keyframes: {
              '0%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['0_PERCENT'].X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['0_PERCENT'].Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['0_PERCENT'].Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['0_PERCENT']
                  .EASE,
              },
              '20%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['20_PERCENT']
                  .X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['20_PERCENT']
                  .Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['20_PERCENT']
                  .Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION[
                  '20_PERCENT'
                ].EASE,
              },
              '40%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['40_PERCENT']
                  .X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['40_PERCENT']
                  .Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['40_PERCENT']
                  .Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION[
                  '40_PERCENT'
                ].EASE,
              },
              '60%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['60_PERCENT']
                  .X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['60_PERCENT']
                  .Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['60_PERCENT']
                  .Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION[
                  '60_PERCENT'
                ].EASE,
              },
              '80%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['80_PERCENT']
                  .X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['80_PERCENT']
                  .Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['80_PERCENT']
                  .Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION[
                  '80_PERCENT'
                ].EASE,
              },
              '100%': {
                x: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['100_PERCENT']
                  .X,
                y: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['100_PERCENT']
                  .Y,
                z: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION['100_PERCENT']
                  .Z,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.POSITION[
                  '100_PERCENT'
                ].EASE,
              },
            },
            duration: duration,
          },
          delay,
        )

        // ROTATION
        .to(
          hiImFedericoSceneGroupRef.current.rotation,
          {
            keyframes: {
              '0%': {
                x: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['0_PERCENT'].X,
                ),
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['0_PERCENT']
                  .EASE,
              },
              '20%': {
                x: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['20_PERCENT'].X,
                ),
                y: 0,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION[
                  '20_PERCENT'
                ].EASE,
              },
              '40%': {
                x: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['40_PERCENT'].X,
                ),
                y: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['40_PERCENT'].Y,
                ),
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION[
                  '40_PERCENT'
                ].EASE,
              },
              '60%': {
                x: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['80_PERCENT'].X,
                ),
                y: 0,
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION[
                  '60_PERCENT'
                ].EASE,
              },
              '100%': {
                x: THREE.MathUtils.degToRad(
                  heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION['100_PERCENT']
                    .X,
                ),
                ease: heroAnimationsConstants.BLOCKS.HI_I_M_FEDERICO.ANIMATION.ROTATION[
                  '100_PERCENT'
                ].EASE,
              },
              easeEach: 'none',
            },
            duration: duration,
          },
          delay,
        )
    },
    { scope: hiImFedericoSceneGroupRef },
  )
  return (
    <group ref={hiImFedericoSceneGroupRef}>
      <HiText timeline={timeline} />
      <ImText timeline={timeline} />
      <FedericoText timeline={timeline} />
    </group>
  )
}
