import React, { useRef } from 'react'
import * as THREE from 'three'

import { LogoAthleticoNacional } from '@/components/three/models/shared/LogoAthleticoNacional'

import { getLogoAthleticoNacionalComponentDefaultValues } from '@/data/contact/three/logoAthleticoNacionalComponentData'

export default function LogoAthleticoNacionalComponent() {
  const logoAthleticoNacionalComponentRef = useRef<THREE.Mesh>(null!)

  return (
    <LogoAthleticoNacional
      ref={logoAthleticoNacionalComponentRef}
      position={getLogoAthleticoNacionalComponentDefaultValues.position}
      scale={getLogoAthleticoNacionalComponentDefaultValues.scale}
    />
  )
}
