import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HillTopLeftComponent from './HillTopLeftComponent'
import HillTopRightComponent from './HillTopRightComponent'
import BirdComponent from './BirdComponent'
import Clouds from './Clouds'
import SunAndMoon from './sun_and_moon/SunAndMoonGroup'
import SkyComponent from './SkyComponent'

import { getGobelinoGroupAnimationsData } from '@/data/home/hero/three/portrait/gobelino/gobelinoGroupData'

import { showHide } from 'animations'

export default function GobelinoGroup() {
  const { timeline } = useGSAPTimelineContext()

  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: gobelinoGroupRef.current,
        animationsData: getGobelinoGroupAnimationsData(),
      })
    },
    { scope: gobelinoGroupRef },
  )

  return (
    <group ref={gobelinoGroupRef}>
      <HillTopLeftComponent />
      <HillTopRightComponent />
      <BirdComponent />
      <Clouds />
      <SunAndMoon />
      <SkyComponent />
    </group>
  )
}
