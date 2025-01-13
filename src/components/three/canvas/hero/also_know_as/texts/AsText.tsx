import React from 'react'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { getAlsoKnowAsTextsDefaultValues } from '@/data/hero/three/also_know_as/texts/alsoKnowAsTextsData'
import { getAsTextDefaultValues } from '@/data/hero/three/also_know_as/texts/asTextData'

export default function AsText() {
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('as')

  return (
    <Word3D
      ref={textGroupRef}
      name={getAsTextDefaultValues.name}
      position={getAsTextDefaultValues.position}
      {...getAlsoKnowAsTextsDefaultValues.geometry}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial {...getAlsoKnowAsTextsDefaultValues.material} />
    </Word3D>
  )
}
