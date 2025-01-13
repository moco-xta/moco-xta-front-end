import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { LogoAthleticoNacional } from '@/components/three/models/hero/portrait/foreground/mess/LogoAthleticoNacional'

import {
  getLogoAthleticoNacionalComponentAnimationsData,
  getLogoAthleticoNacionalComponentDefaultValues,
} from '@/data/hero/three/portrait/foreground/mess/logoAthleticoNacionalComponentData'

import { animate } from '@/animation/index'

export default function LogoAthleticoNacionalComponent() {
  const { timeline } = useGSAPTimelineContext()

  const logoAthleticoNacionalComponentRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      animate({
        timeline: timeline,
        ref: logoAthleticoNacionalComponentRef.current,
        animationsData: getLogoAthleticoNacionalComponentAnimationsData(),
      })
    },
    { scope: logoAthleticoNacionalComponentRef },
  )

  return (
    <LogoAthleticoNacional
      ref={logoAthleticoNacionalComponentRef}
      position={getLogoAthleticoNacionalComponentDefaultValues.position}
      scale={getLogoAthleticoNacionalComponentDefaultValues.scale}
    />
  )
}
