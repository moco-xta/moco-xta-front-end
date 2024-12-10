import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/three/home/hero/aFrontEndDeveloperTextGroupThreeConstants.json'

interface ATextInterface {
  timeline: GSAPTimeline
}

export default function AText({ timeline }: ATextInterface) {
  const t = useTranslations('HOME')

  const [aText] = useState<string>(t('HERO.A').toUpperCase())
  const [aTextSplitted] = useState<string[]>(aText.split(''))

  const aTextGroupRef = useRef<THREE.Group>(null!)
  const aTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={aTextGroupRef}
      keyPrefix={'a_text'}
      font={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.FONT.FONT}
      size={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.FONT.SIZE}
      depth={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.FONT.DEPTH}
      splittedWord={aTextSplitted}
      position={
        new THREE.Vector3(
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.POSITION.X,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.POSITION.Y,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.A_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={aTextLengthRef}
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
