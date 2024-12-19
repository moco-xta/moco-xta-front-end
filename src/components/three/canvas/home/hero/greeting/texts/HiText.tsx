import React from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { greetingTextsData } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import { hiTextData } from '@/data/home/hero/three/greeting/texts/hiTextData'

export default function HiText() {
  const t = useTranslations('HOME')
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText(t('HERO.HI'))

  return (
    <Word3D
      ref={textGroupRef}
      position={
        new THREE.Vector3(
          hiTextData.defaultValues.position.x,
          hiTextData.defaultValues.position.y,
          hiTextData.defaultValues.position.z,
        )
      }
      {...greetingTextsData.defaultValues.word3d}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...greetingTextsData.defaultValues.material} />
    </Word3D>
  )
}
