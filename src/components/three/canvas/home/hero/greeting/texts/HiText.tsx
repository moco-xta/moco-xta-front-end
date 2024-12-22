import React, { useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { TMesh } from '@/types/animation/three/componentsTypes'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { greetingTextsData } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import {
  hiTextDefaultValues,
  getHiTextAnimationsData,
} from '@/data/home/hero/three/greeting/texts/hiTextData'

import { animate } from '@/animations/index'

export default function HiText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  useGSAP(
    () => {
      const hiLetters: TMesh[] = gsap.utils.toArray(textGroupRef.current.children)
      hiLetters.forEach((letterRef, index) => {
        animate(/* {
          timeline: timeline,
          ref: letterRef,
          animationsData: getHiTextAnimationsData(textLengthRef.current, index)
        } */)
      })
    },
    { scope: textGroupRef },
  )

  useEffect(() => {
    console.log('textGroupRef', textGroupRef.current)
  }, [textGroupRef])

  return (
    <Word3D
      ref={textGroupRef}
      keySuffix={hiTextDefaultValues.keySuffix}
      position={
        new THREE.Vector3(
          hiTextDefaultValues.position!.x,
          hiTextDefaultValues.position!.y,
          hiTextDefaultValues.position!.z,
        )
      }
      {...greetingTextsData.text3D}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...greetingTextsData.material} />
    </Word3D>
  )
}
