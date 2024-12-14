import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Spray } from '@/components/three/models/home/hero/portrait/foreground/mess/tools/Spray'

import { sprayComponentAnimations } from '@/animations/index'

export default function SprayComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sprayComponentRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(sprayComponentRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: sprayComponentAnimations.material.keyframes,
            duration: sprayComponentAnimations.material.duration,
          },
          sprayComponentAnimations.delay,
        )
      })
    },
    { scope: sprayComponentRef },
  )

  return <Spray ref={sprayComponentRef} />
}
