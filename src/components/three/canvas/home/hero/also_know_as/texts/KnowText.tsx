import React, { useRef } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { getAlsoKnowAsTextsDefaultValues } from '@/data/home/hero/three/also_know_as/texts/alsoKnowAsTextsData'
import { getKnowTextDefaultValues } from '@/data/home/hero/three/also_know_as/texts/knowTextData'

export default function KnowText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('know')

  const knowTextRef = useRef<THREE.Group>(null!)
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={knowTextRef}
      keySuffix={getKnowTextDefaultValues.name}
      position={getKnowTextDefaultValues.position}
      {...getAlsoKnowAsTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getAlsoKnowAsTextsDefaultValues.material} />
    </Word3D>
  )
}
