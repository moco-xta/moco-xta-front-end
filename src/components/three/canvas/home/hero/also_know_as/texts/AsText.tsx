import React, { useRef } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { getAlsoKnowAsTextsDefaultValues } from '@/data/home/hero/three/also_know_as/texts/alsoKnowAsTextsData'
import { getAsTextDefaultValues } from '@/data/home/hero/three/also_know_as/texts/asTextData'

export default function AsText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('as')

  const asTextRef = useRef<THREE.Group>(null!)
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={asTextRef}
      keySuffix={getAsTextDefaultValues.name}
      position={getAsTextDefaultValues.position}
      {...getAlsoKnowAsTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getAlsoKnowAsTextsDefaultValues.material} />
    </Word3D>
  )
}
