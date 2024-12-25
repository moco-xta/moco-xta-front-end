import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { TMesh } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { getGreetingTextsDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import {
  getFedericoTextDefaultValues,
  getFedericoTextAnimationsData,
} from '@/data/home/hero/three/greeting/texts/federicoTextData'

import { default as federicoTextConstants } from '@/constants/home/hero/three/greeting/texts/federicoTextConstants.json'

import { animate } from '@/animations/index'

export default function FedericoText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('Federico')

  useGSAP(
    () => {
      const letters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      letters.forEach((letterRef, index) => {
        animate({
          timeline: timeline,
          ref: letterRef,
          animationsData: getFedericoTextAnimationsData({
            textGroupRef: textGroupRef.current,
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
      keySuffix={federicoTextConstants.name}
      position={getFedericoTextDefaultValues.position}
      {...getGreetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getGreetingTextsDefaultValues.material} />
    </Word3D>
  )
}
