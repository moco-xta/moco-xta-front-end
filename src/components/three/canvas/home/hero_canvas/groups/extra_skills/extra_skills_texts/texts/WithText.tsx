import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { default as extraSkillsTextsConstants } from '@/constants/animations/home/hero/canvas/groups/extra_skills/extraSkillsTextsConstants.json'
import { default as withTextConstants } from '@/constants/animations/home/hero/canvas/groups/extra_skills/texts/withTextConstants.json'

import { Word3D } from '@/components/three/components/word_3d/Word3D'
import { SkillsTextBackground } from '../SkillsTextBackground'

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

  /* useGSAP(() => {
    gsap.to(withGroupRef.current.position, {
      keyframes: {
        '0%': { y: 7.5 },
        '50%': { y: 4.6 },
        easeEach: 'power1.in',
      },
      delay: heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.DELAY,
      duration:
        heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.STEPS /
        heroConstants.SPEED,
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
      delay: heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.DELAY,
      duration:
        heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.STEPS /
        heroConstants.SPEED,
    })
    gsap.to(withTextBackgroundRef.current.scale, {
      keyframes: {
        '0%': { z: 5 },
        '75%': { z: 10 },
        '100%': { z: 1, ease: 'power4.in' },
        easeEach: 'power1.in',
      },
      delay: heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.DELAY,
      duration:
        heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.STEPS /
        heroConstants.SPEED,
    })
  }) */

  return (
    <group
      ref={withGroupRef}
      position={new THREE.Vector3(0, 4.6, 0)}
    >
      <Word3D
        ref={withTextGroupRef}
        keyPrefix={'with'}
        font={extraSkillsTextsConstants.GEOMETRY.FONT}
        size={extraSkillsTextsConstants.GEOMETRY.SIZE}
        depth={extraSkillsTextsConstants.GEOMETRY.DEPTH}
        splittedWord={withTextSplitted}
        position={
          new THREE.Vector3(
            withTextConstants.DEFAULT.GEOMETRY.POSITION.X,
            withTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
            withTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
          )
        }
        center={extraSkillsTextsConstants.GEOMETRY.CENTER}
        lengthRef={lengthRef}
      >
        <meshStandardMaterial
          color={extraSkillsTextsConstants.MATERIAL.COLOR}
          transparent={extraSkillsTextsConstants.MATERIAL.TRANSPARENT}
          opacity={extraSkillsTextsConstants.MATERIAL.OPACITY}
          side={THREE.DoubleSide}
        />
      </Word3D>
      <SkillsTextBackground ref={withTextBackgroundRef} />
    </group>
  )
}
