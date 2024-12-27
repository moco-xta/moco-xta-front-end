import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import {
  getSunAndMoonGroupAnimationsData,
  sunAndMoonGroupDefaultValues,
} from '@/data/home/hero/three/portrait/gobelino/sun_and_moon/sunAndMoonGroupData'

import { animate } from 'animations'

export default function SunAndMoon() {
  const { timeline } = useGSAPTimelineContext()

  const sunAndMoonGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: sunAndMoonGroupRef.current,
        animationsData: getSunAndMoonGroupAnimationsData(),
      })
    },
    { scope: sunAndMoonGroupRef },
  )

  return (
    <group
      ref={sunAndMoonGroupRef}
      {...sunAndMoonGroupDefaultValues}
    >
      <SunComponent />
      <MoonComponent />
    </group>
  )
}
