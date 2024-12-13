import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { LogoAthleticoNacional } from '@/components/three/models/home/hero/portrait/foreground/mess/LogoAthleticoNacional'

import { default as logoAthleticoNacionalComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/logoAthleticoNacionalComponentAnimationsConstants.json'

import { logoAthleticoNacionalComponentAnimations } from '@/animations/index'

export default function LogoAthleticoNacionalComponent() {
  const { timeline } = useGSAPTimelineContext()

  const logoAthleticoNacionalComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      logoAthleticoNacionalComponentMeshRef.current.material,
      {
        keyframes: logoAthleticoNacionalComponentAnimations.material.keyframes,
        duration: logoAthleticoNacionalComponentAnimations.material.duration,
      },
      logoAthleticoNacionalComponentAnimations.delay,
    )
  })

  return (
    <LogoAthleticoNacional
      ref={logoAthleticoNacionalComponentMeshRef}
      position={
        new THREE.Vector3(
          logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      scale={logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE}
    />
  )
}
