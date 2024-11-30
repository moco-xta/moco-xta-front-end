import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../Word3D'
import { SkillsTextBackground } from '../front_end_developper_with_extra_skills/SkillsTextBackground'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'
import { useFrame } from '@react-three/fiber'

export default function ExtraText() {
  const t = useTranslations('HOME')

  const [extraText] = useState<string>(t('HERO.EXTRA').toUpperCase())
  const [extraTextSplitted] = useState<string[]>(extraText.split(''))

  const extraGroupRef = useRef<THREE.Group>(null!)
  const extraTextGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())
  const extraTextBackgroundRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (extraTextGroupRef.current && extraTextBackgroundRef.current) {
      box3Ref.current.setFromObject(extraTextGroupRef.current)
      extraTextBackgroundRef.current.scale.set(
        box3Ref.current.max.x * 2 + 1,
        box3Ref.current.max.y * 2 + 1,
        1,
      )
      extraTextBackgroundRef.current.position.z = -(
        extraTextBackgroundRef.current.scale.z / 2 +
        0.2
      )
    }
  }, [extraTextGroupRef, extraTextBackgroundRef])

  useFrame(() => {
    extraTextBackgroundRef.current.position.z = -extraTextBackgroundRef.current.scale.z / 2
  })

  useGSAP(() => {
    gsap.to(extraGroupRef.current.position, {
      keyframes: {
        '0%': { x: 4 },
        '50%': { x: 0 },
        easeEach: 'power1.in',
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
    gsap.to(extraGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          x: THREE.MathUtils.degToRad(45),
          y: THREE.MathUtils.degToRad(-15),
          z: THREE.MathUtils.degToRad(-30),
        },
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
    gsap.to(extraTextBackgroundRef.current.scale, {
      keyframes: {
        '50%': { z: 1 },
        '75%': { z: 10 },
        '100%': { z: 1, ease: 'power4.in' },
        easeEach: 'power1.in',
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
    <group
      ref={extraGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <Word3D
        ref={extraTextGroupRef}
        keyPrefix={'extra'}
        font={'fonts/json/Gilroy_Heavy.json'}
        size={3.3}
        depth={8}
        splittedWord={extraTextSplitted}
        position={new THREE.Vector3(0, 0, 0)}
        center={true}
        lengthRef={lengthRef}
      >
        <meshStandardMaterial
          color={heroAnimationsConstants.SCENES.PHONE_NUMBER_SCENE.TEXT.COLOR}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </Word3D>
      <SkillsTextBackground ref={extraTextBackgroundRef} />
    </group>
  )
}
