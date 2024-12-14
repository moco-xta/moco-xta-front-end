import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HillTopLeftComponent from './HillTopLeftComponent'
import HillTopRightComponent from './HillTopRightComponent'
import BirdComponent from './BirdComponent'
import CloudComponent from './CloudComponent'
import SkyComponent from './SkyComponent'
import SunAndMoon from './SunAndMoon'

import { default as gobelinoGroupConstants } from '@/constants/animations/home/hero/portrait/gobelino/gobelinoGroupConstants.json'
import { default as cloudsConstants } from '@/constants/animations/home/hero/portrait/gobelino/cloudsConstants.json'

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
      <HillTopLeftComponent />
      <HillTopRightComponent />
      <BirdComponent />
      {cloudsConstants.map((cloud, index) => (
        <CloudComponent
          key={`cloud_${index}`}
          position={
            new THREE.Vector3(
              cloud.ANIMATION['0_PERCENT'].POSITION.X,
              cloud.ANIMATION['0_PERCENT'].POSITION.Y,
              cloud.ANIMATION['0_PERCENT'].POSITION.Z,
            )
          }
        />
      ))}
      <SunAndMoon />
      <SkyComponent />
    </group>
  )
}
