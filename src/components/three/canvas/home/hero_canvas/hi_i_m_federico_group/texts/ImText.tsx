import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'
import { imTextPositionAnimation, imTextMaterialAnimation } from 'animations'

interface ImTextInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function ImText({ timeline, duration, delay }: ImTextInterface) {
  const t = useTranslations('HOME')

  const [imText] = useState<string>(t('HERO.I_M').toUpperCase())
  const [imTextSplitted] = useState<string[]>(imText.split(''))

  const imTextGroupRef = useRef<THREE.Group>(null!)
  const imTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const imLetters = gsap.utils.toArray(imTextGroupRef.current.children)
      imLetters.forEach((letter, index) => {
        // POSITION
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: imTextPositionAnimation(imTextLengthRef.current, index),
            duration: duration,
          },
          delay +
            (index * hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.STAGGER) /
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
            (index * hiImFedericoGroupAnimationsConstants.SUBS.I_M_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: imTextGroupRef },
  )

  return (
    <Word3D
      ref={imTextGroupRef}
      keyPrefix={'i_m_text'}
      font={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.I_M}
      depth={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={imTextSplitted}
      position={
        new THREE.Vector3(
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.X,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.Y,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.I_M_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={imTextLengthRef}
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
