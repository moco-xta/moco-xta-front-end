import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { LogoAthleticoNacional } from '@/components/three/models/home/hero/portrait/foreground/mess/LogoAthleticoNacional'

import { default as logoAthleticoNacionalComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

import { logoAthleticoNacionalComponentAnimations } from 'animations'
import { AnimatedComponent } from '@/components/animation/AnimatedComponent'

export default function LogoAthleticoNacionalComponent() {
  const { timeline } = useGSAPTimelineContext()

  const logoAthleticoNacionalComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    logoAthleticoNacionalComponentAnimations(
      timeline,
      logoAthleticoNacionalComponentMeshRef.current,
    )
  })

  return (
    <AnimatedComponent timeline={timeline}>
      <LogoAthleticoNacional
        ref={logoAthleticoNacionalComponentMeshRef}
        position={
          new THREE.Vector3(
            logoAthleticoNacionalComponentConstants.DEFAULT.POSITION.X,
            logoAthleticoNacionalComponentConstants.DEFAULT.POSITION.Y,
            logoAthleticoNacionalComponentConstants.DEFAULT.POSITION.Z,
          )
        }
        scale={logoAthleticoNacionalComponentConstants.DEFAULT.SCALE}
      />
    </AnimatedComponent>
  )
}
