import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

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
      font={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.SIZE}
      depth={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.DEPTH}
      splittedWord={alsoTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.AKA_MOCO.ALSO.POSITION.X,
          heroAnimationsConstants.SCENES.AKA_MOCO.ALSO.POSITION.Y,
          heroAnimationsConstants.SCENES.AKA_MOCO.ALSO.POSITION.Z,
        )
      }
      center={true}
      lengthRef={alsoTextLengthRef}
    >
      <meshStandardMaterial
        color={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.COLOR}
        transparent={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.TRANSPARENT}
        opacity={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.OPACITY}
        emissive={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.EMISSIVE}
        emissiveIntensity={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.EMISSIVE_INTENSITY}
        // wireframe={greetingCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.WIREFRAME}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
