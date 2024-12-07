import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/three/home/hero/aFrontEndDeveloperTextGroupThreeConstants.json'

interface EndTextInterface {
  timeline: GSAPTimeline
}

export default function EndText({ timeline }: EndTextInterface) {
  const [endText] = useState<string>('end'.toUpperCase())
  const [endTextSplitted] = useState<string[]>(endText.split(''))

  const endTextGroupRef = useRef<THREE.Group>(null!)
  const endTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={endTextGroupRef}
      keyPrefix={'end_text'}
      font={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.FONT}
      size={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.SIZE}
      depth={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.DEPTH}
      splittedWord={endTextSplitted}
      position={
        new THREE.Vector3(
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.X,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.Y,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={endTextLengthRef}
    >
      <meshStandardMaterial
        color={aFrontEndDeveloperTextGroupAnimationsConstants.MATERIALS.TEXTS.COLOR}
        transparent={aFrontEndDeveloperTextGroupAnimationsConstants.MATERIALS.TEXTS.TRANSPARENT}
        opacity={aFrontEndDeveloperTextGroupAnimationsConstants.MATERIALS.TEXTS.OPACITY}
        // emissive={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
