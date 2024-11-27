import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'
import { Box, useHelper } from '@react-three/drei'

export default function HomeScene() {
  const t = useTranslations('HOME')

  const timelineRef = useRef<GSAPTimeline>(gsap.timeline())

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiWrapperGroupRef = useRef<THREE.Group>(null!)
  const hiGroupRef = useRef<THREE.Group>(null!)

  // const DURATION = 2
  const DURATION = 0.5

  // useHelper(hiGroupRef, THREE.BoxHelper, "blue");

  useGSAP(() => {
    timelineRef.current
      .from(
        hiGroupRef.current.position,
        {
          z: -4,
          duration: DURATION,
          ease: 'power1.out',
        },
        1,
      )
      .from(
        hiWrapperGroupRef.current.position,
        {
          x: -2,
          duration: DURATION,
          ease: 'power1.out',
        },
        1,
      )
      .from(
        hiWrapperGroupRef.current.rotation,
        {
          z: THREE.MathUtils.degToRad(33),
          duration: DURATION,
          ease: 'power1.out',
        },
        1,
      )
      .to(
        hiGroupRef.current.position,
        {
          x: -5,
          y: 3,
          z: -8,
          duration: DURATION,
          ease: 'power1.in',
        },
        3,
      )
      .to(
        hiGroupRef.current.rotation,
        {
          z: THREE.MathUtils.degToRad(-20),
          duration: DURATION,
          ease: 'power1.in',
        },
        3,
      )
    const hiLetters = gsap.utils.toArray(hiGroupRef.current.children)
    hiLetters.forEach((letter, index) => {
      timelineRef.current
        .from(
          // @ts-ignore
          letter.position,
          {
            y: 2,
            duration: DURATION,
            delay: 0.1 * index,
            ease: 'power1.out',
          },
          1,
        )
        .from(
          // @ts-ignore
          letter.material,
          {
            opacity: 0,
            duration: DURATION,
            delay: (DURATION / hiLetters.length) * index,
            ease: 'power1.in',
          },
          1,
        )
        .to(
          // @ts-ignore
          letter.material,
          {
            opacity: 0,
            duration: DURATION,
            ease: 'power1.in',
          },
          3,
        )
    })
  })

  return (
    <>
      <Box args={[0.1, 0.1, 0.1]} />
      <group ref={hiWrapperGroupRef}>
        <Word3D
          ref={hiGroupRef}
          keyPrefix={'hi'}
          font={'fonts/json/Aaaiight_Fat_Regular.json'}
          depth={0.1}
          splittedWord={hiTextSplitted}
          position={new THREE.Vector3(0, 0, 0)}
          center={true}
        />
      </group>
    </>
  )
}
