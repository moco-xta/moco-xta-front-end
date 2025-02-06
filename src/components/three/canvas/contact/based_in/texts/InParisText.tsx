import React from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { basedInParisTextsDefaultValues } from '@/data/contact/three/based_in/texts/imBasedInParisTextsData'
import {
  getInParisTextAnimationsData,
  getInParisTextDefaultValues,
} from '@/data/contact/three/based_in/texts/inParisTextData'

import { animate } from '@/animation/index'

export default function InParisText() {
  const t = useTranslations('CONTACT')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('BASED_IN.IN_PARIS'))

  useGSAP(() => {
    const contactLetters = gsap.utils.toArray(textGroupRef.current.children)
    contactLetters.forEach(letterRef => {
      animate({
        timeline: timeline,
        ref: letterRef as THREE.Group,
        // animationsData: getHiTextAnimationsData(index),
        animationsData: getInParisTextAnimationsData(),
      })
    })
  })

  return (
    <Word3D
      ref={textGroupRef}
      {...getInParisTextDefaultValues()}
      {...basedInParisTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...basedInParisTextsDefaultValues.material} />
    </Word3D>
  )
}
