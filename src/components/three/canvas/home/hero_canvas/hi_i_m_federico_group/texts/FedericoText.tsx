import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'

import { federicoTextPositionAnimation, imTextMaterialAnimation } from 'animations'

interface FedericoTextInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function FedericoText({ timeline, duration, delay }: FedericoTextInterface) {
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
            (index * hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.STAGGER) /
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
            (index * hiImFedericoGroupAnimationsConstants.SUBS.FEDERICO_TEXT.ANIMATION.STAGGER) /
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
      font={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.FEDERICO}
      depth={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={federicoTextSplitted}
      position={
        new THREE.Vector3(
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.X,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.Y,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.FEDERICO_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={federicoTextLengthRef}
    >
      <meshStandardMaterial
        color={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.COLOR}
        transparent={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.TRANSPARENT}
        opacity={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.MATERIALS.OPACITY}
        // emissive={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.MATERIALS.TEXTS.EMISSIVE}
        side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
