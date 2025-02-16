import React from 'react'
import * as THREE from 'three'

import BustComponent from './bust/BustComponent'
import LogoGithubComponent from './socials_logos/LogoGithubComponent'
import LogoInstagramComponent from './socials_logos/LogoInstagramComponent'
import LogoLinkedInComponent from './socials_logos/LogoLinkedInComponent'
import LogoPinterestComponent from './socials_logos/LogoPinterestComponent'
import LogoXComponent from './socials_logos/LogoXComponent'
import { getDegreeEuler } from '@/helpers/threeHelpers'

export default function ContactScene() {
  return (
    <group>
      <BustComponent />
      <group
        position={new THREE.Vector3(3, 0, 0)}
        rotation={getDegreeEuler({ y: -25 })}
      >
        <LogoXComponent />
        <LogoInstagramComponent />
        <LogoLinkedInComponent />
        <LogoPinterestComponent />
        <LogoGithubComponent />
      </group>
    </group>
  )
}
