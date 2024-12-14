import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as alsoKnowAsTextsConstants } from '@/constants/animations/home/hero/portrait/foreground/alsoKnowAsTextsConstants.json'
import { default as alsoTextConstants } from '@/constants/animations/home/hero/portrait/foreground/alsoTextConstants.json'

export default function AlsoText() {
  const [alsoText] = useState<string>('also'.toUpperCase())
  const [alsoTextSplitted] = useState<string[]>(alsoText.split(''))

  const alsoTextGroupRef = useRef<THREE.Group>(null!)
  const alsoTextLengthRef = useRef<number[]>([])
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={alsoTextGroupRef}
      keyPrefix={'also_text'}
      font={alsoKnowAsTextsConstants.GEOMETRY.FONT}
      size={alsoKnowAsTextsConstants.GEOMETRY.SIZE}
      depth={alsoKnowAsTextsConstants.GEOMETRY.DEPTH}
      splittedWord={alsoTextSplitted}
      position={
        new THREE.Vector3(
          alsoTextConstants.ANIMATION['0_PERCENT'].POSITION.X,
          alsoTextConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          alsoTextConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      lengthRef={alsoTextLengthRef}
    >
      <meshStandardMaterial
        color={alsoKnowAsTextsConstants.MATERIAL.COLOR}
        transparent={alsoKnowAsTextsConstants.MATERIAL.TRANSPARENT}
        opacity={alsoKnowAsTextsConstants.MATERIAL.OPACITY}
        emissive={alsoKnowAsTextsConstants.MATERIAL.EMISSIVE}
        emissiveIntensity={alsoKnowAsTextsConstants.MATERIAL.EMISSIVE_INTENSITY}
        wireframe={alsoKnowAsTextsConstants.MATERIAL.WIREFRAME}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
