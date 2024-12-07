import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/three/home/hero/aFrontEndDeveloperTextGroupThreeConstants.json'

interface FrontTextInterface {
  timeline: GSAPTimeline
}

export default function FrontText({ timeline }: FrontTextInterface) {
  const [frontText] = useState<string>('front'.toUpperCase())
  const [frontTextSplitted] = useState<string[]>(frontText.split(''))

  const frontTextGroupRef = useRef<THREE.Group>(null!)
  const frontTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={frontTextGroupRef}
      keyPrefix={'front_text'}
      font={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.FONT.FONT}
      size={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.FONT.SIZE}
      depth={
        aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.FONT.DEPTH
      }
      splittedWord={frontTextSplitted}
      position={
        new THREE.Vector3(
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.POSITION.X,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.POSITION.Y,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.FRONT_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={frontTextLengthRef}
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
