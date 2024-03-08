import * as THREE from 'three'

import { PerformedWithDataInterface } from '@/interfaces/data/performedWithDataInterface'

import { LogoSass } from '@/components/r3f/models/logos/LogoSass'

export const performedWithData: PerformedWithDataInterface[] = [
  {
    logo: LogoSass,
    scale: new THREE.Vector3(0.5, 0.5, 1),
  },
  {
    logo: LogoSass,
    scale: new THREE.Vector3(0.5, 0.5, 1),
  },
]
