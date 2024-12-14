import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroConstants } from '@/constants/animations/home/hero/canvas/groups/heroConstants.json'
import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/greetingTextsAnimationsConstants.json'
import { default as imTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/imTextAnimationsConstants.json'

import { imTextAnimations } from 'animations'

export default function ImText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()

  const [imText] = useState<string>(t('HERO.I_M').toUpperCase())
  const [imTextSplitted] = useState<string[]>(imText.split(''))

  const imTextGroupRef = useRef<THREE.Group>(null!)
  const imTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const imLetters: THREE.Mesh[] = gsap.utils.toArray(imTextGroupRef.current.children)
      imLetters.forEach((letter, index) => {
        const animations = imTextAnimations(imTextLengthRef.current, index)
        timeline
          // POSITION
          .to(
            letter.position,
            {
              keyframes: animations.position.keyframes,
              duration: animations.duration,
            },
            animations.delay,
          )
          // MATERIAL
          .to(
            letter.material,
            {
              keyframes: animations.material.keyframes,
              duration: animations.duration,
            },
            animations.delay,
          )
      })
    },
    { scope: imTextGroupRef },
  )

  return (
    <Word3D
      ref={imTextGroupRef}
      keyPrefix={'i_m_text'}
      font={greetingTextsAnimationsConstants.GEOMETRY.FONT}
      size={greetingTextsAnimationsConstants.GEOMETRY.SIZES.DEFAULT}
      depth={greetingTextsAnimationsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      splittedWord={imTextSplitted}
      lengthRef={imTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsAnimationsConstants.MATERIAL.COLOR}
        transparent={greetingTextsAnimationsConstants.MATERIAL.TRANSPARENT}
        opacity={imTextAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
