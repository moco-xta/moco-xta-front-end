import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'
import { SkillsTextBackground } from '../SkillsTextBackground'

import { default as extraSkillsTextsConstants } from '@/constants/animations/home/hero/canvas/groups/extra_skills/extraSkillsTextsConstants.json'
import { default as extraTextConstants } from '@/constants/animations/home/hero/canvas/groups/extra_skills/texts/extraTextConstants.json'

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

  /* useGSAP(() => {
    gsap.to(extraGroupRef.current.position, {
      keyframes: {
        '0%': { x: 4 },
        '50%': { x: 0 },
        easeEach: 'power1.in',
      },
      delay: heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.DELAY,
      duration:
        heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.STEPS /
        heroConstants.SPEED,
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
      delay: heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.DELAY,
      duration:
        heroConstants.SCENES.FRONT_END_DEVELOPPER_WITH_EXTRA_SKILLS_SCENE.MAC_BOOK_PRO.STEPS /
        heroConstants.SPEED,
    })
    gsap.to(extraTextBackgroundRef.current.scale, {
      keyframes: {
        '50%': { z: 1 },
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
      ref={extraGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <Word3D
        ref={extraTextGroupRef}
        keyPrefix={'extra'}
        font={extraSkillsTextsConstants.GEOMETRY.FONT}
        size={extraSkillsTextsConstants.GEOMETRY.SIZE}
        depth={extraSkillsTextsConstants.GEOMETRY.DEPTH}
        splittedWord={extraTextSplitted}
        position={
          new THREE.Vector3(
            extraTextConstants.DEFAULT.GEOMETRY.POSITION.X,
            extraTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
            extraTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
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
      <SkillsTextBackground ref={extraTextBackgroundRef} />
    </group>
  )
}
