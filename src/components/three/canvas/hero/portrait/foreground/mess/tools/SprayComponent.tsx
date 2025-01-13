import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { Spray } from '@/components/three/models/hero/portrait/foreground/mess/tools/Spray'

import { getSprayComponentAnimationsData } from '@/data/hero/three/portrait/foreground/mess/tools/sprayComponentData'

import { animate } from '@/animation/index'

export default function SprayComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sprayComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: sprayComponentRef.current,
        animationsData: getSprayComponentAnimationsData(),
        params: {
          withMaterialsArray: true,
        },
      })
    },
    { scope: sprayComponentRef },
  )

  return <Spray ref={sprayComponentRef} />
}
