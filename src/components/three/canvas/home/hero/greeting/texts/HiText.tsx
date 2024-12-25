import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TMesh } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { getGreetingTextsDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import {
  getHiTextAnimationsData,
  getHiTextDefaultValues,
} from '@/data/home/hero/three/greeting/texts/hiTextData'

import { default as hiTextConstants } from '@/constants/home/hero/three/greeting/texts/hiTextConstants.json'

import { animate } from '@/animations/index'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  useGSAP(
    () => {
      const letters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      letters.forEach((letterRef, index) => {
        animate({
          timeline: timeline,
          ref: letterRef,
          // animationsData: getHiTextAnimationsData(index),
          animationsData: getHiTextAnimationsData({
            textLengthRef: textLengthRef.current,
            index: index,
          }),
        })
      })
    },
    { scope: textGroupRef },
  )

  return (
    <Word3D
      ref={textGroupRef}
      keySuffix={hiTextConstants.name}
      position={getHiTextDefaultValues.position}
      {...getGreetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getGreetingTextsDefaultValues.material} />
    </Word3D>
  )
}
