import React, { useRef } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { getAlsoKnowAsTextsDefaultValues } from '@/data/home/hero/three/also_know_as/texts/alsoKnowAsTextsData'
import { getAlsoTextDefaultValues } from '@/data/home/hero/three/also_know_as/texts/alsoTextData'

export default function AlsoText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('also')

  const alsoTextRef = useRef<THREE.Group>(null!)
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={alsoTextRef}
      name={getAlsoTextDefaultValues.name}
      position={getAlsoTextDefaultValues.position}
      {...getAlsoKnowAsTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getAlsoKnowAsTextsDefaultValues.material} />
    </Word3D>
  )
}
