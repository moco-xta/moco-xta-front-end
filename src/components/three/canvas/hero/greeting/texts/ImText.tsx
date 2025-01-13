import React from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { greetingTextsDefaultValues } from '@/data/hero/three/greeting/texts/greetingTextsData'
import {
  imTextDefaultValues,
  getImTextAnimationsData,
} from '@/data/hero/three/greeting/texts/imTextData'

import { animate } from '@/animation/index'

export default function ImText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.I_M'))

  useGSAP(
    () => {
      const letters: THREE.Mesh[] = gsap.utils.toArray(textGroupRef.current.children)
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
      {...imTextDefaultValues}
      {...greetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...greetingTextsDefaultValues.material} />
    </Word3D>
  )
}
