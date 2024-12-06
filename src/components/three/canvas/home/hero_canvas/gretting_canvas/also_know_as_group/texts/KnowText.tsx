import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '../../../../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

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
      font={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.SIZE}
      depth={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.DEPTH}
      splittedWord={knowTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.KNOW.POSITION.X,
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.KNOW.POSITION.Y,
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.KNOW.POSITION.Z,
        )
      }
      center={true}
      lengthRef={knowTextLengthRef}
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
