import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as alsoKnowAsTextsConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/alsoKnowAsTextsConstants.json'
import { default as asTextConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/asTextConstants.json'

export default function AsText() {
  const [asText] = useState<string>('as'.toUpperCase())
  const [asTextSplitted] = useState<string[]>(asText.split(''))

  const asTextGroupRef = useRef<THREE.Group>(null!)
  const asTextLengthRef = useRef<number[]>([])
  // const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')
  return (
    <Word3D
      ref={asTextGroupRef}
      keyPrefix={'as_text'}
      font={alsoKnowAsTextsConstants.GEOMETRY.FONT}
      size={alsoKnowAsTextsConstants.GEOMETRY.SIZE}
      depth={alsoKnowAsTextsConstants.GEOMETRY.DEPTH}
      splittedWord={asTextSplitted}
      position={
        new THREE.Vector3(
          asTextConstants.ANIMATION['0_PERCENT'].POSITION.X,
          asTextConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          asTextConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      center={true}
      lengthRef={asTextLengthRef}
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
