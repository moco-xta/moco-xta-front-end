import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import SkyComponent from './SkyComponent'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import SunAndMoon from './SunAndMoon'

interface GobelinoConponentInterface {
  timeline: GSAPTimeline
}

export default function GobelinoComponent({ timeline }: GobelinoConponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    // POSITION
    timeline.to(
      gobelinoGroupRef.current,
      {
        onComplete: () => {
          gobelinoGroupRef.current.visible = false
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <group ref={gobelinoGroupRef}>
      <SunAndMoon timeline={timeline} />
      <SkyComponent timeline={timeline} />
    </group>
  )
}
