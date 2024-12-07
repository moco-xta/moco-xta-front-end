import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/three/home/hero/aFrontEndDeveloperTextGroupThreeConstants.json'

interface DeveloperTextInterface {
  timeline: GSAPTimeline
}

export default function DeveloperText({ timeline }: DeveloperTextInterface) {
  const t = useTranslations('HOME')

  const [developerText] = useState<string>(t('HERO.DEVELOPER').toUpperCase())
  const [developerTextSplitted] = useState<string[]>(developerText.split(''))

  const developerTextGroupRef = useRef<THREE.Group>(null!)
  const developerTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={developerTextGroupRef}
      keyPrefix={'developer_text'}
      font={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.FONT}
      size={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.SIZE}
      depth={aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.FONT.DEPTH}
      splittedWord={developerTextSplitted}
      position={
        new THREE.Vector3(
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.X,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.Y,
          aFrontEndDeveloperTextGroupAnimationsConstants.GEOMETRIES.END_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={developerTextLengthRef}
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
