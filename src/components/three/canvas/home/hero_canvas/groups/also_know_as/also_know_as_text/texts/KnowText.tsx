import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as alsoKnowAsTextsConstants } from '@/constants/animations/home/hero/portrait/foreground/alsoKnowAsTextsConstants.json'
import { default as knowTextConstants } from '@/constants/animations/home/hero/portrait/foreground/knowTextConstants.json'

export default function KnowText() {
  const [knowText] = useState<string>('know'.toUpperCase())
  const [knowTextSplitted] = useState<string[]>(knowText.split(''))

  const knowTextGroupRef = useRef<THREE.Group>(null!)
  const knowTextLengthRef = useRef<number[]>([])
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={knowTextGroupRef}
      keyPrefix={'know_text'}
      font={alsoKnowAsTextsConstants.GEOMETRY.FONT}
      size={alsoKnowAsTextsConstants.GEOMETRY.SIZE}
      depth={alsoKnowAsTextsConstants.GEOMETRY.DEPTH}
      splittedWord={knowTextSplitted}
      position={
        new THREE.Vector3(
          knowTextConstants.ANIMATION['0_PERCENT'].POSITION.X,
          knowTextConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          knowTextConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      lengthRef={knowTextLengthRef}
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
