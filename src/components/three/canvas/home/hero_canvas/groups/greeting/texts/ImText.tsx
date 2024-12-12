import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as imTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/caseIssue.json'

import { imTextMaterialAnimation, imTextPositionAnimation } from 'animations'

interface ImTextInterface {
  timeline: GSAPTimeline
}

export default function ImText({ timeline }: ImTextInterface) {
  const t = useTranslations('HOME')

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
      if (imTextAnimationsConstants.ANIMATE) {
        const imLetters = gsap.utils.toArray(imTextGroupRef.current.children)
        imLetters.forEach((letter, index) => {
          // POSITION
          timeline.to(
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
          timeline.to(
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
      }
    },
    { scope: imTextGroupRef },
  )

  return (
    <Word3D
      ref={imTextGroupRef}
      keyPrefix={'i_m_text'}
      font={greetingTextsAnimationsConstants.GEOMETRY.FONT}
      size={greetingTextsAnimationsConstants.GEOMETRY.SIZES.HI_TEXT}
      depth={greetingTextsAnimationsConstants.GEOMETRY.DEPTH}
      splittedWord={imTextSplitted}
      position={
        new THREE.Vector3(
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          imTextAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsAnimationsConstants.MATERIAL.COLOR}
        transparent={greetingTextsAnimationsConstants.MATERIAL.TRANSPARENT}
        opacity={
          imTextAnimationsConstants.ANIMATE
            ? imTextAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
            : 1
        }
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
