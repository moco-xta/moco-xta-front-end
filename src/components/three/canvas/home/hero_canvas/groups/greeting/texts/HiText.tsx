import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from '@/components/three/components/word_3d/Word3D'

import { default as heroCanvasConstants } from '@/constants/three/home/hero/heroCanvasConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as hiTextAnimationsContants } from '@/constants/animations/home/hero/greeting/hiTextAnimationsConstants.json'

import { hiTextAnimations } from 'animations'

interface HiTextInterface {
  timeline: GSAPTimeline
}

export default function HiText({ timeline }: HiTextInterface) {
  const t = useTranslations('HOME')

  const [duration] = useState<number>(
    hiTextAnimationsContants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    hiTextAnimationsContants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

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
            (index * hiTextAnimationsContants.ANIMATION.STAGGER) / heroAnimationsConstants.SPEED,
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
            (index * hiTextAnimationsContants.ANIMATION.STAGGER) / heroAnimationsConstants.SPEED,
        )
      })
    },
    { scope: hiTextGroupRef },
  )

  return (
    <Word3D
      ref={hiTextGroupRef}
      keyPrefix={'hi_text'}
      font={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.FONT.FONT}
      size={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.FONT.SIZE}
      depth={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.FONT.DEPTH}
      splittedWord={hiTextSplitted}
      position={
        new THREE.Vector3(
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.POSITION.X,
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.POSITION.Y,
          heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.HI_TEXT.GEOMETRY.POSITION.Z,
        )
      }
      center={true}
      lengthRef={hiTextLengthRef}
    >
      <meshStandardMaterial
        color={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.COLOR}
        transparent={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.TRANSPARENT}
        opacity={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.OPACITY}
        // emissive={heroCanvasConstants.GROUPS.HI_I_M_FEDERICO_GROUP.MATERIALS.TEXTS.EMISSIVE}
        // side={THREE.DoubleSide}
      />
    </Word3D>
  )
}
