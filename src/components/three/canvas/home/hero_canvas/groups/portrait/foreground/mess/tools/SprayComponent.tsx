import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Spray } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Spray'

import { sprayComponentAnimations } from 'animations'

export default function SprayComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sprayComponentGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(sprayComponentGroupRef.current.children)
      meshes.forEach((meshRef) => {
        sprayComponentAnimations(timeline, meshRef)
      })
    },
    { scope: sprayComponentGroupRef },
  )

  return <Spray ref={sprayComponentGroupRef} />
}
