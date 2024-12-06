import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import WithText from './texts/WithText'
import ExtraText from './texts/ExtraText'
import SkillsText from './texts/SkillsText'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function WithExtraSkills() {
  const withExtraSkillsGroupRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    gsap.to(withExtraSkillsGroupRef.current.position, {
      keyframes: {
        '0%': { x: -5, y: -3, z: 12 },
        '50%': { x: 0, y: 0, z: 0 },
        easeEach: 'power1.in',
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
    /* gsap.to(withExtraSkillsGroupRef.current.scale, {
      keyframes: {
        '50%': { z: 1 },
        '75%': { z: 5 },
        '100%': { z: 1, ease: 'power4.in' },
        easeEach: 'power1.in',
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    }) */
  })

  return (
    <group
      ref={withExtraSkillsGroupRef}
      rotation={new THREE.Euler(0, THREE.MathUtils.degToRad(33), 0)}
    >
      <WithText />
      <ExtraText />
      <SkillsText />
    </group>
  )
}
