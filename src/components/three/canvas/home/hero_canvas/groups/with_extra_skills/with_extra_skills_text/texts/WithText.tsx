import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'
import { SkillsTextBackground } from '../SkillsTextBackground'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function WithText() {
  const t = useTranslations('HOME')

  const [withText] = useState<string>(t('HERO.WITH').toUpperCase())
  const [withTextSplitted] = useState<string[]>(withText.split(''))

  const withGroupRef = useRef<THREE.Group>(null!)
  const withTextGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())
  const withTextBackgroundRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    if (withTextGroupRef.current && withTextBackgroundRef.current) {
      box3Ref.current.setFromObject(withTextGroupRef.current)
      withTextBackgroundRef.current.scale.set(
        box3Ref.current.max.x * 2 + 1,
        box3Ref.current.max.y * 2 + 1,
        1,
      )
      withTextBackgroundRef.current.position.z = -(withTextBackgroundRef.current.scale.z / 2 + 0.2)
    }
  }, [withTextGroupRef, withTextBackgroundRef])

  useFrame(() => {
    withTextBackgroundRef.current.position.z = -withTextBackgroundRef.current.scale.z / 2
  })

  useGSAP(() => {
    gsap.to(withGroupRef.current.position, {
      keyframes: {
        '0%': { y: 7.5 },
        '50%': { y: 4.6 },
        easeEach: 'power1.in',
      },
      delay:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .DELAY,
      duration:
        heroAnimationsConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO
          .STEPS / heroAnimationsConstants.SPEED,
    })
    gsap.to(withGroupRef.current.rotation, {
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
    gsap.to(withTextBackgroundRef.current.scale, {
      keyframes: {
        '0%': { z: 5 },
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
      ref={withGroupRef}
      position={new THREE.Vector3(0, 4.6, 0)}
    >
      <Word3D
        ref={withTextGroupRef}
        keyPrefix={'with'}
        font={'fonts/json/Gilroy_Heavy.json'}
        size={3.3}
        depth={8}
        splittedWord={withTextSplitted}
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
      <SkillsTextBackground ref={withTextBackgroundRef} />
    </group>
  )
}
