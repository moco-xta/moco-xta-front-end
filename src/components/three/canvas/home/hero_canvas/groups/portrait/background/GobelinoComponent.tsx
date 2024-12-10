import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import SkyComponent from './SkyComponent'
import SunAndMoon from './SunAndMoon'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as gobelinoComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelinoComponentAnimationsConstants.json'

interface GobelinoConponentInterface {
  timeline: GSAPTimeline
}

export default function GobelinoComponent({ timeline }: GobelinoConponentInterface) {
  const [duration] = useState<number>(
    gobelinoComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    gobelinoComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    if (gobelinoComponentAnimationsConstants.ANIMATE) {
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
    }
  })

  return (
    <group ref={gobelinoGroupRef}>
      <SunAndMoon timeline={timeline} />
      <SkyComponent timeline={timeline} />
    </group>
  )
}
