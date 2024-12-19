import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as greetingTextsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/greetingTextsConstants.json'
import { default as imTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/imTextAnimationsConstants.json'

import { imTextAnimations } from 'animations'

export default function ImText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.I_M'))

  useGSAP(
    () => {
      const imLetters: THREE.Mesh[] = gsap.utils.toArray(textGroupRef.current.children)
      imLetters.forEach((letterRef, index) => {
        imTextAnimations(timeline, letterRef, textLengthRef.current, index)
      })
    },
    { scope: textGroupRef },
  )

  return (
    <Word3D
      ref={textGroupRef}
      keyPrefix={'i_m_text'}
      font={greetingTextsConstants.GEOMETRY.FONT}
      size={greetingTextsConstants.GEOMETRY.SIZES.DEFAULT}
      depth={greetingTextsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          imTextAnimationsConstants.DEFAULT.POSITION.X,
          imTextAnimationsConstants.DEFAULT.POSITION.Y,
          imTextAnimationsConstants.DEFAULT.POSITION.Z,
        )
      }
      center={greetingTextsConstants.GEOMETRY.CENTER}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsConstants.MATERIAL.COLOR}
        transparent={greetingTextsConstants.MATERIAL.TRANSPARENT}
        opacity={imTextAnimationsConstants.DEFAULT.MATERIAL.OPACITY}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
