import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingAnimationsConstants.json'
import { default as greetingTextsAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingTextsAnimationsConstants.json'
import { default as hiTextAnimationsContants } from '@/constants/animations/home/hero/greeting/hiTextAnimationsConstants.json'

import { hiTextAnimations } from 'animations'

interface HiTextInterface {
  timeline: GSAPTimeline
}

export default function HiText({ timeline }: HiTextInterface) {
  const t = useTranslations('HOME')

  const [duration] = useState<number>(
    hiTextAnimationsContants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    hiTextAnimationsContants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiTextGroupRef = useRef<THREE.Group>(null!)
  const hiTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      if (!greetingAnimationsConstants.PAUSED && !hiTextAnimationsContants.PAUSED) {
        const hiLetters: THREE.Mesh[] = gsap.utils.toArray(hiTextGroupRef.current.children)
        hiLetters.forEach((letter, index) => {
          // POSITION
          timeline
            .to(
              letter.position,
              {
                keyframes: hiTextAnimations.position.keyframes,
                duration: duration,
              },
              delay +
                (index * hiTextAnimationsContants.ANIMATION.STAGGER) /
                  heroAnimationsConstants.SPEED,
            )
            // MATERIAL
            .to(
              letter.material,
              {
                keyframes: hiTextAnimations.rotation.keyframes,
                duration: duration,
              },
              delay +
                (index * hiTextAnimationsContants.ANIMATION.STAGGER) /
                  heroAnimationsConstants.SPEED,
            )
        })
      }
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
        opacity={
          !greetingAnimationsConstants.PAUSED && !hiTextAnimationsContants.PAUSED
            ? hiTextAnimationsContants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
            : 1
        }
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
