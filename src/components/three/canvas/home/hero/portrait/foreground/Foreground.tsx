import React, { useRef } from 'react'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import {
  getForegroundDefaultValues,
  getForegroundGroupAnimationsData,
} from '@/data/home/hero/three/portrait/foreground/foregroundGroupData'

import { animate } from 'animations'

export default function ForegroundGroup() {
  const { timeline } = useGSAPTimelineContext()

  const foregroundGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: foregroundGroupRef.current,
        animationsData: getForegroundGroupAnimationsData(),
      })
    },
    { scope: foregroundGroupRef },
  )

  return (
    <group
      ref={foregroundGroupRef}
      position={getForegroundDefaultValues.position}
    >
      <Box />
      {/* <AlsoKnowAsText /> */}
    </group>
  )
}
