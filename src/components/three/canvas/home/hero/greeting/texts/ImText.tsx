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
  getImTextDefaultValues,
  getImTextAnimationsData,
} from '@/data/home/hero/three/greeting/texts/imTextData'

import { animate } from '@/animations/index'

export default function ImText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.I_M'))

  useGSAP(
    () => {
      const letters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      letters.forEach((letterRef, index) => {
        animate({
          timeline: timeline,
          ref: letterRef,
          animationsData: getImTextAnimationsData({
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
      keySuffix={getImTextDefaultValues.name}
      position={getImTextDefaultValues.position}
      {...getGreetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getGreetingTextsDefaultValues.material} />
    </Word3D>
  )
}
