import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Spray } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Spray'

import { getSprayComponentAnimationsData } from '@/data/home/hero/three/portrait/foreground/mess/tools/sprayComponentData'

import { animate } from 'animations'

export default function SprayComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sprayComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: sprayComponentRef.current,
        animationsData: getSprayComponentAnimationsData(),
      })
    },
    { scope: sprayComponentRef },
  )

  return <Spray ref={sprayComponentRef} />
}
