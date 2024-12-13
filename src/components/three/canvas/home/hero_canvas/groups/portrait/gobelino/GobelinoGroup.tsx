import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import SkyComponent from './SkyComponent'
import SunAndMoon from './SunAndMoon'

import { default as gobelinoGroupAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/gobelinoGroupAnimationsConstants.json'

export default function GobelinoGroup() {
  const { timeline } = useGSAPTimelineContext()

  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  /* useGSAP(() => {
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
  }) */

  return (
    <group ref={gobelinoGroupRef}>
      <SunAndMoon />
      <SkyComponent />
    </group>
  )
}
