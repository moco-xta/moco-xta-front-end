import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as developerTextsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/developerTextsConstants.json'
import { default as developerTextConstants } from '@/constants/animations/home/hero/canvas/groups/developer/texts/developerTextConstants.json'

export default function DeveloperText() {
  const t = useTranslations('HOME')
  const { timeline } = useGSAPTimelineContext()

  const [developerText] = useState<string>(t('HERO.DEVELOPER').toUpperCase())
  const [developerTextSplitted] = useState<string[]>(developerText.split(''))

  const developerTextGroupRef = useRef<THREE.Group>(null!)
  const developerTextLengthRef = useRef<number[]>([])

  return (
    <Word3D
      ref={developerTextGroupRef}
      keyPrefix={'developer_text'}
      font={developerTextsConstants.GEOMETRY.FONT}
      size={developerTextsConstants.GEOMETRY.SIZE}
      depth={developerTextsConstants.GEOMETRY.DEPTH}
      splittedWord={developerTextSplitted}
      position={
        new THREE.Vector3(
          developerTextConstants.DEFAULT.GEOMETRY.POSITION.X,
          developerTextConstants.DEFAULT.GEOMETRY.POSITION.Y,
          developerTextConstants.DEFAULT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={developerTextLengthRef}
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
