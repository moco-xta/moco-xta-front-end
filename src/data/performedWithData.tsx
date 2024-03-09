import * as THREE from 'three'

import { PerformedWithDataInterface } from '@/interfaces/data/performedWithDataInterface'

import { LogoBlender } from '@/components/r3f/models/logos/LogoBlender'
import { LogoFigma } from '@/components/r3f/models/logos/LogoFigma'
import { LogoChatGpt } from '@/components/r3f/models/logos/LogoChatGpt'
import { LogoGithub } from '@/components/r3f/models/logos/LogoGithub'
import { LogoHtml } from '@/components/r3f/models/logos/LogoHtml'
import { LogoNextjs } from '@/components/r3f/models/logos/LogoNextjs'
import { LogoNpm } from '@/components/r3f/models/logos/LogoNpm'
import { LogoReactThreeDrei } from '@/components/r3f/models/logos/LogoReactThreeDrei'
import { LogoRedux } from '@/components/r3f/models/logos/LogoRedux'
import { LogoSass } from '@/components/r3f/models/logos/LogoSass'
import { LogoSpring } from '@/components/r3f/models/logos/LogoSpring'
import { LogoPhotoshop } from '@/components/r3f/models/logos/LogoPhotoshop'

export const performedWithData: PerformedWithDataInterface[] = [
  {
    logo: LogoBlender,
    scale: new THREE.Vector3(0.5, 0.5, 0.5),
  },
  {
    logo: LogoFigma,
    scale: new THREE.Vector3(0.5, 0.5, 0.5),
  },
  {
    logo: LogoChatGpt,
    scale: new THREE.Vector3(0.6, 0.6, 0.5),
  },
  {
    logo: LogoGithub,
    scale: new THREE.Vector3(0.6, 0.6, 0.5),
  },
  {
    logo: LogoHtml,
    scale: new THREE.Vector3(0.5, 0.5, 0.5),
  },
  {
    logo: LogoNextjs,
    scale: new THREE.Vector3(0.25, 0.25, 0.5),
  },
  {
    logo: LogoNpm,
    scale: new THREE.Vector3(0.25, 0.25, 0.5),
  },
  {
    logo: LogoPhotoshop,
    scale: new THREE.Vector3(0.5, 0.5, 0.5),
  },
  {
    logo: LogoReactThreeDrei,
    scale: new THREE.Vector3(0.3, 0.3, 0.5),
  },
  {
    logo: LogoRedux,
    scale: new THREE.Vector3(0.6, 0.6, 0.5),
  },
  {
    logo: LogoSass,
    scale: new THREE.Vector3(0.5, 0.5, 0.5),
  },
  {
    logo: LogoSpring,
    scale: new THREE.Vector3(0.6, 0.6, 0.5),
  },
]
