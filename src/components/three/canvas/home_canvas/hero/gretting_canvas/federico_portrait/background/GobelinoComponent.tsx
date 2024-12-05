import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import SkyComponent from './SkyComponent'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface GobelinoConponentInterface {
  timeline: GSAPTimeline
}

export default function GobelinoComponent({ timeline }: GobelinoConponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  useEffect(() => {
    console.log('gobelinoGroupRef', gobelinoGroupRef)
  }, [gobelinoGroupRef])

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
    <group
      ref={gobelinoGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <SkyComponent timeline={timeline} />
    </group>
  )
}
