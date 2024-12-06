import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as hiImFedericoGroupAnimationsConstants } from '@/constants/animations/home/hero/hiImFedericoGroupAnimationsConstants.json'

import { hiTextAnimations } from 'animations'

interface HiTextInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function HiText({ timeline, duration, delay }: HiTextInterface) {
  const t = useTranslations('HOME')

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiTextGroupRef = useRef<THREE.Group>(null!)
  const hiTextLengthRef = useRef<number[]>([])

  useGSAP(
    () => {
      const hiLetters = gsap.utils.toArray(hiTextGroupRef.current.children)
      hiLetters.forEach((letter, index) => {
        // POSITION
        timeline.to(
          // @ts-ignore
          letter.position,
          {
            keyframes: hiTextAnimations.position.keyframes,
            duration: duration,
          },
          delay +
            (index * hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )

        // MATERIAL
        timeline.to(
          // @ts-ignore
          letter.material,
          {
            keyframes: hiTextAnimations.rotation.keyframes,
            duration: duration,
          },
          delay +
            (index * hiImFedericoGroupAnimationsConstants.SUBS.HI_TEXT.ANIMATION.STAGGER) /
              heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.FONT}
      size={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.SIZES.HI}
      depth={heroCanvasConstants.SCENES.HI_I_M_FEDERICO.TEXTS.GEOMETRY.DEPTH}
      splittedWord={hiTextSplitted}
      position={
        new THREE.Vector3(
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.X,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.Y,
          heroCanvasConstants.SCENES.HI_I_M_FEDERICO.HI_TEXT.POSITION.Z,
        )
      }
      center={true}
      lengthRef={hiTextLengthRef}
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
