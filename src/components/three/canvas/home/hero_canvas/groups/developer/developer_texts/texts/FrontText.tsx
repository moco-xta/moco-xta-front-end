import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as developerTextsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsConstants.json'
import { default as frontTextConstants } from '@/constants/animations/home/hero/canvas/groups/developer/texts/frontTextConstants.json'

export default function FrontText() {
  const { timeline } = useGSAPTimelineContext()

  const [frontText] = useState<string>('front'.toUpperCase())
  const [frontTextSplitted] = useState<string[]>(frontText.split(''))

  const frontTextGroupRef = useRef<THREE.Group>(null!)
  const frontTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={frontTextGroupRef}
      keyPrefix={'front_text'}
      font={developerTextsConstants.GEOMETRY.FONT}
      size={developerTextsConstants.GEOMETRY.SIZE}
      depth={developerTextsConstants.GEOMETRY.DEPTH}
      splittedWord={frontTextSplitted}
      position={
        new THREE.Vector3(
          frontTextConstants.DEFAULT.GEOMETRY.POSITION.X,
          frontTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
          frontTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={frontTextLengthRef}
    >
      <meshStandardMaterial
        color={developerTextsConstants.MATERIAL.COLOR}
        transparent={developerTextsConstants.MATERIAL.TRANSPARENT}
        opacity={developerTextsConstants.MATERIAL.OPACITY}
        // emissive={developerTextsConstants.MATERIAL.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
