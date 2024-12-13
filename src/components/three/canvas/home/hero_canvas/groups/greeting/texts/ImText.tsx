import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as imTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/texts/imTextAnimationsConstants.json'

import { imTextMaterialAnimation, imTextPositionAnimation } from 'animations'

export default function ImText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()

  const [imText] = useState<string>(t('HERO.I_M').toUpperCase())
  const [imTextSplitted] = useState<string[]>(imText.split(''))

  const [duration] = useState<number>(
    imTextAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    imTextAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const imTextGroupRef = useRef<THREE.Group>(null!)
  const imTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const imLetters = gsap.utils.toArray(imTextGroupRef.current.children)
      imLetters.forEach((letter, index) => {
        // POSITION
        timeline
          .to(
            // @ts-ignore
            letter.position,
            {
              keyframes: imTextPositionAnimation(imTextLengthRef.current, index),
              duration: duration,
            },
            delay +
              (index * imTextAnimationsConstants.ANIMATION.STAGGER) / heroAnimationsConstants.SPEED,
          )
          // MATERIAL
          .to(
            // @ts-ignore
            letter.material,
            {
              keyframes: imTextMaterialAnimation.keyframes,
              duration: duration,
            },
            delay +
              (index * imTextAnimationsConstants.ANIMATION.STAGGER) / heroAnimationsConstants.SPEED,
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
