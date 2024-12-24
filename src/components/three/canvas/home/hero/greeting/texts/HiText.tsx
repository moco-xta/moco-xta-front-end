import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import type { TMesh } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { greetingTextsDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import {
  hiTextDefaultValues,
  // getHiTextAnimationsData,
} from '@/data/home/hero/three/greeting/texts/hiTextData'

import { animate } from '@/animations/index'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  /* useGSAP(
    () => {
      const letters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      letters.forEach((letterRef, index) => {
        animate({
          timeline: timeline,
          ref: letterRef,
          animationsData: getHiTextAnimationsData({
            textLengthRef: textLengthRef.current,
            index: index,
          }),
        })
      })
    },
    { scope: textGroupRef },
  ) */

  return (
    <Word3D
      ref={textGroupRef}
      keySuffix={hiTextDefaultValues.keySuffix!}
      position={hiTextDefaultValues.position}
      {...greetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...greetingTextsDefaultValues.material} />
    </Word3D>
  )
}
