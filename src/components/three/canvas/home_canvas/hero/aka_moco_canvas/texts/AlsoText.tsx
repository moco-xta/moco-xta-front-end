import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '../../../components/word_3d/Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

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
        color={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.COLOR}
        transparent={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.TRANSPARENT}
        opacity={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.OPACITY}
        emissive={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.EMISSIVE}
        emissiveIntensity={
          heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.EMISSIVE_INTENSITY
        }
        // wireframe={heroAnimationsConstants.SCENES.AKA_MOCO.TEXTS.MATERIAL.WIREFRAME}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
