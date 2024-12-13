import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as hiTextAnimationsContants } from '@/constants/animations/home/hero/greeting/texts/hiTextAnimationsConstants.json'

import { hiTextAnimations } from 'animations'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiTextGroupRef = useRef<THREE.Group>(null!)
  const hiTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const hiLetters: THREE.Mesh[] = gsap.utils.toArray(hiTextGroupRef.current.children)
      hiLetters.forEach((letter, index) => {
        const animations = hiTextAnimations(index)
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
              keyframes: animations.rotation.keyframes,
              duration: animations.duration,
            },
            animations.delay,
          )
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={greetingTextsAnimationsConstants.GEOMETRY.FONT}
      size={greetingTextsAnimationsConstants.GEOMETRY.SIZES.DEFAULT}
      depth={greetingTextsAnimationsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          hiTextAnimationsContants.ANIMATION['0_PERCENT'].POSITION.X,
          hiTextAnimationsContants.ANIMATION['0_PERCENT'].POSITION.Y,
          hiTextAnimationsContants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      splittedWord={hiTextSplitted}
      lengthRef={hiTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsAnimationsConstants.MATERIAL.COLOR}
        transparent={greetingTextsAnimationsConstants.MATERIAL.TRANSPARENT}
        opacity={hiTextAnimationsContants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
