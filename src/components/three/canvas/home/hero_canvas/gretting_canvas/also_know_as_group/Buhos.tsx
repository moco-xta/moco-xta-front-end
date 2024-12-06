import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Buho } from '@/components/three/models/home/hero/Buho'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface BuhoComponentInterface {
  timeline: GSAPTimeline
}

export default function Buhos({ timeline }: BuhoComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.BUJO.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.BUJO.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

  const buhosGroupRef = useRef<THREE.Group>(null!)
  const buhoLeftGroupRef = useRef<THREE.Group>(null!)
  const buhoRightGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (buhoLeftGroupRef.current) buhoLeftGroupRef.current.visible = false
    if (buhoRightGroupRef.current) buhoRightGroupRef.current.visible = false
  }, [buhoLeftGroupRef, buhoRightGroupRef])

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        [buhoLeftGroupRef.current, buhoRightGroupRef.current],
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                buhoLeftGroupRef.current.visible = true
                buhoRightGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                buhoLeftGroupRef.current.visible = false
                buhoRightGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: buhosGroupRef },
  )

  return (
    <group ref={buhosGroupRef}>
      <Buho
        ref={buhoLeftGroupRef}
        position={new THREE.Vector3(-3.5, 0, 0)}
        scale={2.5}
      />
      <Buho
        ref={buhoRightGroupRef}
        position={new THREE.Vector3(3.5, 0, 0)}
        scale={new THREE.Vector3(-2.5, 2.5, 2.5)}
      />
    </group>
  )
}
