import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sky } from '@/components/three/models/home/hero/gobelino/Sky'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface SkyComponentInterface {
  timeline: GSAPTimeline
}

export default function SkyComponent({ timeline }: SkyComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const skyComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        // @ts-ignore
        skyComponentMeshRef.current.position,
        {
          keyframes: {
            '0%': {
              y: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .POSITION['0_PERCENT'].Y,
            },
            '33%': {
              y: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .POSITION['20_PERCENT'].Y,
            },
            easeEach:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .POSITION.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )

      // COLOR
      timeline.to(
        // @ts-ignore
        skyComponentMeshRef.current.material.color,
        {
          keyframes: {
            '0%': {
              r: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['0_PERCENT'].R,
              g: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['0_PERCENT'].G,
              b: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['0_PERCENT'].B,
            },
            '40%': {
              r: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['40_PERCENT'].R,
              g: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['40_PERCENT'].G,
              b: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['40_PERCENT'].B,
            },
            '60%': {
              r: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['60_PERCENT'].R,
              g: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['60_PERCENT'].G,
              b: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .COLOR['60_PERCENT'].B,
            },
            easeEach: 'power1.in',
          },
          duration: duration,
        },
        delay,
      )

      // OPACITY
      timeline.to(
        // @ts-ignore
        skyComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity:
                heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                  .MATERIAL['0_PERCENT'].OPACITY,
            },
            '33%': {
              opacity:
                heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                  .MATERIAL['33_PERCENT'].OPACITY,
            },
            easeEach:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SKY.ANIMATION
                .MATERIAL.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )
    },
    /* { scope: skyComponentMeshRef }, */
  )

  return <Sky ref={skyComponentMeshRef} />
}
