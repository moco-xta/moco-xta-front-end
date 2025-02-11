import React from 'react'
// import * as THREE from 'three'
// import { gsap } from 'gsap'
// import { useGSAP } from '@gsap/react'

// import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { greetingTextsDefaultValues } from '@/data/hero/three/greeting/texts/greetingTextsData'
import {
  federicoTextDefaultValues,
  // getFedericoTextAnimationsData,
} from '@/data/hero/three/greeting/texts/federicoTextData'

// import { animate } from '@/animation/index'

export default function FedericoText() {
  // const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('Federico')

  return (
    <Word3D
      ref={textGroupRef}
      {...federicoTextDefaultValues}
      {...greetingTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...greetingTextsDefaultValues.material} />
    </Word3D>
  )
}
