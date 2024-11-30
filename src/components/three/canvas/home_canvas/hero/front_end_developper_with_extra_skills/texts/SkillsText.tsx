import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '../../../components/word_3d/Word3D'
import { SkillsTextBackground } from '../SkillsTextBackground'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function SkillsText() {
  const t = useTranslations('HOME')

  const [skillsText] = useState<string>(t('HERO.SKILLS').toUpperCase())
  const [skillsTextSplitted] = useState<string[]>(skillsText.split(''))

  const skillsGroupRef = useRef<THREE.Group>(null!)
  const skillsTextGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())
  const skillsTextBackgroundRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    gsap.to(skillsGroupRef.current.position, {
      keyframes: {
        '0%': { y: -7.5 },
        '50%': { y: -4.6 },
        easeEach: 'power1.in',
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
    gsap.to(skillsGroupRef.current.rotation, {
      keyframes: {
        '0%': {
          x: THREE.MathUtils.degToRad(-45),
          y: THREE.MathUtils.degToRad(15),
          z: THREE.MathUtils.degToRad(30),
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
    if (skillsTextGroupRef.current && skillsTextBackgroundRef.current) {
      box3Ref.current.setFromObject(skillsTextGroupRef.current)
      skillsTextBackgroundRef.current.scale.set(
        box3Ref.current.max.x * 2 + 1,
        box3Ref.current.max.y * 2 + 1,
        0,
      )
      skillsTextBackgroundRef.current.position.z = -(
        skillsTextBackgroundRef.current.scale.z / 2 +
        0.2
      )
    }
  }, [skillsTextGroupRef, skillsTextBackgroundRef])

  useFrame(() => {
    skillsTextBackgroundRef.current.position.z = -skillsTextBackgroundRef.current.scale.z / 2
  })

  useGSAP(() => {
    gsap.to(skillsTextBackgroundRef.current.scale, {
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
    })
  })

  return (
    <group
      ref={skillsGroupRef}
      position={new THREE.Vector3(0, -4.6, 0)}
    >
      <Word3D
        ref={skillsTextGroupRef}
        keyPrefix={'skills'}
        font={'fonts/json/Gilroy_Heavy.json'}
        size={3.3}
        depth={8}
        splittedWord={skillsTextSplitted}
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
      <SkillsTextBackground ref={skillsTextBackgroundRef} />
    </group>
  )
}
