import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import MacBookProComponent from './MacBookProComponent'
import LogosBackgroundGroup from './LogosBackgroundGroup'
import LogosForegroundGroup from './LogosForegroundGroup'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function MacBookPro() {
  const macBookProComponentAndLogosForegroundGroupRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    gsap.to(macBookProComponentAndLogosForegroundGroupRef.current.position, {
      keyframes: {
        '0%': {
          x: 0,
          y: -2.5,
          z: 12,
          ease: 'power1.out',
        },
        '50%': {
          x: 0,
          y: 0,
          z: 0,
          ease: 'circ.inOut',
        },
        '100%': {
          x: 5,
          y: -5,
          z: 3,
        },
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
    gsap.to(macBookProComponentAndLogosForegroundGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          y: THREE.MathUtils.degToRad(120),
          ease: 'power1.out',
        },
        '50%': {
          y: THREE.MathUtils.degToRad(-15),
          ease: 'circ.inOut',
        },
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
  })

  return (
    <group>
      <group ref={macBookProComponentAndLogosForegroundGroupRef}>
        <MacBookProComponent />
        <LogosForegroundGroup />
      </group>
      <LogosBackgroundGroup />
    </group>
  )
}
