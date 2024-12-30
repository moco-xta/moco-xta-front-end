import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Cloud } from '@/components/three/models/home/hero/portrait/gobelino/Cloud'

import {
  cloudsDefaultValues,
  getCloudsAnimationsData,
} from '@/data/home/hero/three/portrait/gobelino/cloudsData'

import { animate } from 'animations'

export default function Clouds() {
  const { timeline } = useGSAPTimelineContext()

  const cloudsRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: cloudsRef.current,
        animationsData: getCloudsAnimationsData(),
        params: {
          elementsArray: true,
        },
      })
    },
    { scope: cloudsRef },
  )

  return (
    <group ref={cloudsRef}>
      {Array.isArray(cloudsDefaultValues) &&
        cloudsDefaultValues.map((cloudsDefaultValues, index) => (
          <Cloud
            key={`cloud_${index}`}
            index={index}
            position={cloudsDefaultValues.position!}
            rotation={cloudsDefaultValues.rotation!}
            scale={cloudsDefaultValues.scale!}
          />
        ))}
    </group>
  )
}
