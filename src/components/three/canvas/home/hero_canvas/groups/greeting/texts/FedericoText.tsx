import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroCanvasConstants } from '@/constants/canvas/home/hero/heroCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as federicoTextAnimationsConstants } from '@/constants/animations/home/hero/greeting/federicoTextAnimationsConstants.json'

import { federicoTextPositionAnimation, imTextMaterialAnimation } from 'animations'

interface FedericoTextInterface {
  timeline: GSAPTimeline
}

export default function FedericoText({ timeline }: FedericoTextInterface) {
  const [duration] = useState<number>(
    federicoTextAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    federicoTextAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const [federicoText] = useState<string>('federico'.toUpperCase())
  const [federicoTextSplitted] = useState<string[]>(federicoText.split(''))

  const federicoTextGroupRef = useRef<THREE.Group>(null!)
  const federicoTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const federicoLetters = gsap.utils.toArray(federicoTextGroupRef.current.children)
      federicoLetters.forEach((letter, index) => {
        // POSITION
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: federicoTextPositionAnimation(
              federicoTextGroupRef.current,
              federicoTextLengthRef.current,
              index,
            ),
            duration: duration,
          },
          delay +
            (index * federicoTextAnimationsConstants.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )

        // MATERIAL
        timeline.to(
          // @ts-ignore
          letter.material,
          {
            keyframes: imTextMaterialAnimation.keyframes,
            duration: duration,
          },
          delay +
            (index * federicoTextAnimationsConstants.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: federicoTextGroupRef },
  )

  return (
    <Word3D
      ref={federicoTextGroupRef}
      keyPrefix={'federico_text'}
      font={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.FONT.FONT}
      size={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.FONT.SIZE}
      depth={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.FONT.DEPTH}
      splittedWord={federicoTextSplitted}
      position={
        new THREE.Vector3(
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.POSITION.X,
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.POSITION.Y,
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.FEDERICO_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={federicoTextLengthRef}
    >
      <meshStandardMaterial
        color={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.COLOR}
        transparent={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.TRANSPARENT}
        opacity={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.OPACITY}
        // emissive={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
