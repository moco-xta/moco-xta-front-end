import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

// import ImBasedinParisTextsGroup from './texts/ImBasedInParisTextsGroup'
import Metro from '@/components/three/models/contact/Metro'
import MetroArrow from '@/components/three/models/contact/MetroArrow'
import MetroSignBoard from '@/components/three/models/contact/MetroSignBoard'

import {
  getBasedInParisGroupAnimationsData,
  getBasedInParisGroupDefaultValues,
} from '@/data/contact/three/based_in/basedInParisGroupData'

import { showHide } from '@/animation/index'

export default function BasedInParisGroup() {
  const { timeline } = useGSAPTimelineContext()

  const contactMeGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    const box3 = new THREE.Box3()
    box3.setFromObject(contactMeGroupRef.current)
    contactMeGroupRef.current.position.x = -(box3.max.x - box3.min.x) / 2
    contactMeGroupRef.current.position.y = (box3.max.y - box3.min.y) / 2
  })

  useGSAP(
    () => {
      showHide({
        timeline: timeline,
        ref: contactMeGroupRef.current,
        animationsData: getBasedInParisGroupAnimationsData(),
      })
    },
    { scope: contactMeGroupRef },
  )

  return (
    <group
      ref={contactMeGroupRef}
      {...getBasedInParisGroupDefaultValues()}
    >
      {/* <ImBasedinParisTextsGroup /> */}
      <Metro />
      <MetroArrow />
      <MetroSignBoard />
    </group>
  )
}
