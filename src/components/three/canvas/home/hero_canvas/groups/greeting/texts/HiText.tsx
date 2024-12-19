import React from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as greetingTextsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/greetingTextsConstants.json'
import { default as hiTextAnimationsContants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/hiTextAnimationsConstants.json'

import { hiTextAnimations } from '@/animations/home/hero/new/canvas/greeting_group/greeting_texts_group/texts/hiTextAnimations'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  useGSAP(
    () => {
      const hiLetters: THREE.Mesh[] = gsap.utils.toArray(textGroupRef.current.children)
      hiLetters.forEach((letterRef, index) => {
        hiTextAnimations({ timeline: timeline, ref: letterRef, index: index })
      })
    },
    { scope: textGroupRef },
  )

  return (
    <Word3D
      ref={textGroupRef}
      keyPrefix={'hi_text'}
      font={greetingTextsConstants.GEOMETRY.FONT}
      size={greetingTextsConstants.GEOMETRY.SIZES.DEFAULT}
      depth={greetingTextsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          hiTextAnimationsContants.DEFAULT.POSITION.X,
          hiTextAnimationsContants.DEFAULT.POSITION.Y,
          hiTextAnimationsContants.DEFAULT.POSITION.Z,
        )
      }
      center={greetingTextsConstants.GEOMETRY.CENTER}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsConstants.MATERIAL.COLOR}
        transparent={greetingTextsConstants.MATERIAL.TRANSPARENT}
        opacity={hiTextAnimationsContants.DEFAULT.MATERIAL.OPACITY}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
