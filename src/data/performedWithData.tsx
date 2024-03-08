import * as THREE from 'three'

import { PerformedWithDataInterface } from '@/interfaces/data/performedWithDataInterface'

import { LogoGithub } from '@/components/r3f/models/logos/LogoGithub'
import { LogoFigma } from '@/components/r3f/models/logos/LogoFigma'
import { LogoHtml } from '@/components/r3f/models/logos/LogoHtml'
import { LogoSass } from '@/components/r3f/models/logos/LogoSass'

export const performedWithData: PerformedWithDataInterface[] = [
  {
    logo: LogoFigma,
    scale: new THREE.Vector3(0.5, 0.5, 1),
  },
  {
    logo: LogoGithub,
    scale: new THREE.Vector3(0.5, 0.5, 1),
  },
  {
    logo: LogoHtml,
    scale: new THREE.Vector3(0.8, 0.8, 1),
  },
  {
    logo: LogoSass,
    scale: new THREE.Vector3(0.5, 0.5, 1),
  },
]
