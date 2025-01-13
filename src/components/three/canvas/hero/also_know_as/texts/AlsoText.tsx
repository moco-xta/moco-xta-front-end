import React from 'react'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import useSplitted3DText from '@/hooks/animation/useSplitted3DText'

import { getAlsoKnowAsTextsDefaultValues } from '@/data/hero/three/also_know_as/texts/alsoKnowAsTextsData'
import { getAlsoTextDefaultValues } from '@/data/hero/three/also_know_as/texts/alsoTextData'

export default function AlsoText() {
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('also')

  return (
    <Word3D
      ref={textGroupRef}
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
