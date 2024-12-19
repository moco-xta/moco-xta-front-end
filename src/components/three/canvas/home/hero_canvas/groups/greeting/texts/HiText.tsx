import React from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TMesh } from '@/types/animation/componentTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { hiTextData } from '@/data/hero/three/canvas/hero/greeting_group/greeting_texts_group/texts/hiTextData'

import { default as greetingTextsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/greetingTextsConstants.json'
import { default as hiTextConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/hiTextConstants.json'

import { animateMesh } from '@/animations/shared/helpers/animation/animation'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  useGSAP(
    () => {
      const hiLetters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      hiLetters.forEach((letterRef, index) => {
        const animationsData = hiTextData(index, textLengthRef.current)
        animateMesh({
          timeline: timeline,
          ref: letterRef,
          animations: animationsData.animations,
          duration: animationsData.duration,
          label: animationsData.label!,
        })
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
          hiTextConstants.defaultValues.position.x,
          hiTextConstants.defaultValues.position.y,
          hiTextConstants.defaultValues.position.z,
        )
      }
      center={greetingTextsConstants.GEOMETRY.CENTER}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsConstants.MATERIAL.COLOR}
        transparent={greetingTextsConstants.MATERIAL.TRANSPARENT}
        opacity={hiTextConstants.defaultValues.material.opacity}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
