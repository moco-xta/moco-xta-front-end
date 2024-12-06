import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { MacBookPro } from '@/components/three/models/home/MacBookPro'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function MacBookProComponent() {
  const macBookProTopPartRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    gsap.to(macBookProTopPartRef.current.rotation, {
      keyframes: {
        '0%': {
          y: THREE.MathUtils.degToRad(60),
          ease: 'power1.out',
        },
        '50%': {
          y: THREE.MathUtils.degToRad(0),
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
    const macBookTopPart = macBookProTopPartRef.current.getObjectByName('MacBookPro_2')
    gsap.to(macBookTopPart!.rotation, {
      keyframes: {
        '0%': {
          x: THREE.MathUtils.degToRad(0),
          ease: 'power1.out',
        },
        '50%': {
          x: THREE.MathUtils.degToRad(-120),
          ease: 'circ.inOut',
        },
        '100%': {
          x: THREE.MathUtils.degToRad(0),
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
    <MacBookPro
      ref={macBookProTopPartRef}
      rotation={new THREE.Euler(THREE.MathUtils.degToRad(15), 0, 0)}
    />
  )
}
