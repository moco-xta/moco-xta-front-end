import React, { useLayoutEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { contactMeTextsDefaultValues } from '@/data/contact/three/contact_me/texts/contactMeTextsData'
import {
  getMeTextAnimationsData,
  meTextDefaultValues,
} from '@/data/contact/three/contact_me/texts/meTextData'

import { animate } from '@/animation/index'

export default function MeText() {
  const t = useTranslations('CONTACT')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('CONTACT_ME.ME'))

  useLayoutEffect(() => {
    const box3 = new THREE.Box3()
    box3.setFromObject(textGroupRef.current)
    textGroupRef.current.position.x = -(box3.max.x - box3.min.x) / 2
  })

  useGSAP(() => {
    const contactLetters = gsap.utils.toArray(textGroupRef.current.children)
    contactLetters.forEach((letterRef, index) => {
      animate({
        timeline: timeline,
        ref: letterRef as THREE.Group,
        // animationsData: getHiTextAnimationsData(index),
        animationsData: getMeTextAnimationsData({
          textLengthRef: textLengthRef.current,
          index: index,
        }),
      })
    })
  })

  return (
    <Word3D
      ref={textGroupRef}
      {...meTextDefaultValues}
      {...contactMeTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...contactMeTextsDefaultValues.material} />
    </Word3D>
  )
}
