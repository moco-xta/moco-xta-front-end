import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import HiText from './texts/HiText'
import ImText from './texts/ImText'
import FedericoText from './texts/FedericoText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hi_i_m_federico_group/hiImFedericoGroupAnimationsConstants.json'

import { hiImFedericoGroupAnimations } from 'animations'

interface HiImFedericoInterface {
  timeline: GSAPTimeline
}

export default function HiImFedericoGrooup({ timeline }: HiImFedericoInterface) {
  const [duration] = useState<number>(
    hiImFedericoGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    hiImFedericoGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const hiImFedericoGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      timeline
        // POSITION
        .to(
          hiImFedericoGroupRef.current.position,
          {
            keyframes: hiImFedericoGroupAnimations.position.keyframes,
            duration: duration,
          },
          delay,
        )
        // ROTATION
        .to(
          hiImFedericoGroupRef.current.rotation,
          {
            keyframes: hiImFedericoGroupAnimations.rotation.keyframes,
            duration: duration,
          },
          delay,
        )
        // VISIBILITY
        .to(
          hiImFedericoGroupRef.current,
          {
            keyframes: {
              '0%': {
                onComplete: () => {
                  hiImFedericoGroupRef.current.visible = true
                },
              },
              '100%': {
                onComplete: () => {
                  hiImFedericoGroupRef.current.visible = false
                },
              },
            },
            duration: duration,
          },
          delay,
        )
    },
    { scope: hiImFedericoGroupRef },
  )
  return (
    <group
      ref={hiImFedericoGroupRef}
      position={new THREE.Vector3(3, -0.5, 4)}
    >
      <HiText timeline={timeline} />
      <ImText timeline={timeline} />
      <FedericoText timeline={timeline} />
    </group>
  )
}
