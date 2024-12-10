import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as heroCanvasConstants } from '@/constants/three/home/hero/heroCanvasConstants.json'

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
      font={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.FONT}
      size={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.SIZE}
      depth={heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.TEXTS.DEPTH}
      splittedWord={alsoTextSplitted}
      position={
        new THREE.Vector3(
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.ALSO.POSITION.X,
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.ALSO.POSITION.Y,
          heroAnimationsConstants.SCENES.ALSO_KNOW_AS_GROUP.ALSO.POSITION.Z,
        )
      }
      center={true}
      lengthRef={alsoTextLengthRef}
    >
      <meshStandardMaterial
        color={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.COLOR}
        transparent={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.TRANSPARENT}
        opacity={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.OPACITY}
        emissive={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.EMISSIVE}
        emissiveIntensity={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.EMISSIVE_INTENSITY}
        // wireframe={heroCanvasConstants.MATERIALS.TEXTS.ALSO_KNOW_AS.WIREFRAME}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
