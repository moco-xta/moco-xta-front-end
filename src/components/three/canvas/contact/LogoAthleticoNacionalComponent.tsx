import React, { useRef } from 'react'
import * as THREE from 'three'

import { LogoAthleticoNacional } from '../../models/contact/LogoAthleticoNacional'
import { getDegreeEuler } from '@/helpers/threeHelpers'

export default function LogoAthleticoNacionalComponent() {
  const logoAthleticoNacionalComponentRef = useRef<THREE.Mesh>(null!)

  return (
    <LogoAthleticoNacional
      ref={logoAthleticoNacionalComponentRef}
      position={new THREE.Vector3(0.65, -0.7, 0.675)}
      rotation={getDegreeEuler({ x: -15, y: 15 })}
      scale={0.3}
    />
  )
}
