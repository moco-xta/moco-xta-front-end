import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'
import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as greetingTextsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/greetingTextsConstants.json'
import { default as federicoTextAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/texts/federicoTextAnimationsConstants.json'

import { federicoTextAnimations } from 'animations'

export default function FedericoText() {
  const { timeline } = useGSAPTimelineContext()
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('federico')

  useGSAP(
    () => {
      const federicoLetters: THREE.Mesh[] = gsap.utils.toArray(textGroupRef.current.children)
      federicoLetters.forEach((letterRef, index) => {
        federicoTextAnimations(
          timeline,
          textGroupRef.current,
          textLengthRef.current,
          letterRef,
          index,
        )
      })
    },
    { scope: textGroupRef },
  )

  return (
    <Word3D
      ref={textGroupRef}
      keyPrefix={'federico_text'}
      font={greetingTextsConstants.GEOMETRY.FONT}
      size={greetingTextsConstants.GEOMETRY.SIZES.FEDERICO_TEXT}
      depth={greetingTextsConstants.GEOMETRY.DEPTH}
      position={
        new THREE.Vector3(
          federicoTextAnimationsConstants.DEFAULT.POSITION.X,
          federicoTextAnimationsConstants.DEFAULT.POSITION.Y,
          federicoTextAnimationsConstants.DEFAULT.POSITION.Z,
        )
      }
      center={greetingTextsConstants.GEOMETRY.CENTER}
      splittedWord={textSplitted}
      lengthRef={textLengthRef}
    >
      <meshStandardMaterial
        color={greetingTextsConstants.MATERIAL.COLOR}
        transparent={greetingTextsConstants.MATERIAL.TRANSPARENT}
        opacity={federicoTextAnimationsConstants.DEFAULT.MATERIAL.OPACITY}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
