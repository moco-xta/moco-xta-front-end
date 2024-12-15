import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as developerTextsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsConstants.json'
import { default as endTextConstants } from '@/constants/animations/home/hero/canvas/groups/developer/texts/endTextConstants.json'

export default function EndText() {
  const { timeline } = useGSAPTimelineContext()

  const [endText] = useState<string>('end'.toUpperCase())
  const [endTextSplitted] = useState<string[]>(endText.split(''))

  const endTextGroupRef = useRef<THREE.Group>(null!)
  const endTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={endTextGroupRef}
      keyPrefix={'end_text'}
      font={developerTextsConstants.GEOMETRY.FONT}
      size={developerTextsConstants.GEOMETRY.SIZE}
      depth={developerTextsConstants.GEOMETRY.DEPTH}
      splittedWord={endTextSplitted}
      position={
        new THREE.Vector3(
          endTextConstants.DEFAULT.GEOMETRY.POSITION.X,
          endTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
          endTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={endTextLengthRef}
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
