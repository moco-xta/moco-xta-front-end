import React, { useLayoutEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { phoneNumberTextsDefaultValues } from '@/data/contact/three/phone_number/texts/phoneNumberTextsData'
import {
  getPhoneNumberTextAnimationsData,
  getPhoneNumberTextDefaultValues,
} from '@/data/contact/three/phone_number/texts/phoneNumberTextData'

import { animate } from '@/animation/index'

export default function PhoneNumberText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('(+33) 6 15 90 82 75')

  useLayoutEffect(() => {
    const box3 = new THREE.Box3()
    box3.setFromObject(textGroupRef.current)
    textGroupRef.current.position.x = -(box3.max.x - box3.min.x) / 2
  })

  useGSAP(() => {
    const phoneNumberLetters = gsap.utils.toArray(textGroupRef.current.children)
    phoneNumberLetters.forEach((letterRef, index) => {
      animate({
        timeline: timeline,
        ref: letterRef as THREE.Group,
        // animationsData: getHiTextAnimationsData(index),
        animationsData: getPhoneNumberTextAnimationsData({
          textLengthRef: textLengthRef.current,
          index: index,
        }),
      })
    })
  })

  return (
    <Word3D
      ref={textGroupRef}
      {...getPhoneNumberTextDefaultValues()}
      {...phoneNumberTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...phoneNumberTextsDefaultValues.material} />
    </Word3D>
  )
}
