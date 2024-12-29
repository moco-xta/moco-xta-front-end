import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as developerTextsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsConstants.json'
import { default as aTextConstants } from '@/constants/animations/home/hero/canvas/groups/developer/texts/aTextConstants.json'

export default function AText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()

  const [aText] = useState<string>(t('HERO.A').toUpperCase())
  const [aTextSplitted] = useState<string[]>(aText.split(''))

  const aTextGroupRef = useRef<THREE.Group>(null!)
  const aTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={aTextGroupRef}
      keyPrefix={'a_text'}
      font={developerTextsConstants.GEOMETRY.FONT}
      size={developerTextsConstants.GEOMETRY.SIZE}
      depth={developerTextsConstants.GEOMETRY.DEPTH}
      splittedWord={aTextSplitted}
      position={
        new THREE.Vector3(
          aTextConstants.DEFAULT.GEOMETRY.POSITION.X,
          aTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
          aTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={aTextLengthRef}
    >
      <meshStandardMaterial
        color={developerTextsConstants.MATERIAL.COLOR}
        transparent={developerTextsConstants.MATERIAL.TRANSPARENT}
        opacity={developerTextsConstants.MATERIAL.OPACITY}
        // emissive={developerTextsConstants.MATERIAL.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
