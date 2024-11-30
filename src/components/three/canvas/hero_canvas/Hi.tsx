import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Hi() {
  const t = useTranslations('HOME')

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [hiTextSplitted] = useState<string[]>(hiText.split(''))

  const hiGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  // useHelper(hiGroupRef, THREE.BoxHelper, 'blue')

  useGSAP(() => {
    box3Ref.current.setFromObject(hiGroupRef.current)
    gsap.to(hiGroupRef.current.position, {
      keyframes: {
        '0%': { x: -4, z: -4 },
        '60%': { x: -box3Ref.current.max.x - box3Ref.current.min.x, z: 0 },
        '100%': { x: -3, y: 2, z: 1, ease: 'power4.in' },
        easeEach: 'power1.in',
      },
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    gsap.to(hiGroupRef.current.rotation, {
      keyframes: {
        '0%': { z: THREE.MathUtils.degToRad(30) },
        '60%': { z: THREE.MathUtils.degToRad(-25) },
        '100%': { z: THREE.MathUtils.degToRad(5) },
        easeEach: 'power1.in',
      },
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    const hiLetters = gsap.utils.toArray(hiGroupRef.current.children)
    hiLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.from(letter.position, {
        y: 2,
        duration: (10 / heroAnimationsConstants.SPEED) * 0.6,
        delay: 0.1 * index,
        ease: 'power1.in',
      })
      // @ts-ignore
      gsap.from(letter.material, {
        opacity: 0,
        emissiveIntensity: () => {
          return 1
        },
        duration: (10 / heroAnimationsConstants.SPEED) * 0.6,
        delay: 0.25 * index,
        ease: 'power4.in',
      })
    })
  })

  return (
    <Word3D
      ref={hiGroupRef}
      keyPrefix={'hi'}
      font={'fonts/json/Aaaiight_Fat_Regular.json'}
      depth={0.1}
      splittedWord={hiTextSplitted}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
      lengthRef={lengthRef}
    >
      <meshStandardMaterial
        color={'#dcff00'}
        transparent
        side={THREE.DoubleSide}
        emissive={'#dcff00'}
      />
    </Word3D>
  )
}
