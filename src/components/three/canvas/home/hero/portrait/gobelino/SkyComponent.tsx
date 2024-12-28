import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Sky } from '@/components/three/models/home/hero/portrait/gobelino/Sky'

import {
  skyComponentDefaultValues,
  getSkyComponentAnimationsData,
} from '@/data/home/hero/three/portrait/gobelino/skyComponentData'

import { animate } from 'animations'

export default function SkyComponent() {
  const { timeline } = useGSAPTimelineContext()

  const skyComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: skyComponentRef.current,
        animationsData: getSkyComponentAnimationsData(),
      })
    },
    { scope: skyComponentRef },
  )

  useEffect(() => {
    console.log('skyComponentRef', skyComponentRef)
  }, [skyComponentRef])

  return (
    <Sky
      ref={skyComponentRef}
      position={skyComponentDefaultValues.position}
    />
  )
}
