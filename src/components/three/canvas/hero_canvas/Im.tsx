import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Im() {
  const t = useTranslations('HOME')

  const [imText] = useState<string>(t('HERO.I_M').toUpperCase())
  const [imTextSplitted] = useState<string[]>(imText.split(''))

  const imGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  useGSAP(() => {
    gsap.to(imGroupRef.current.position, {
      keyframes: {
        '0%': { y: -4, z: 2 },
        '100%': { y: -1, z: 0 },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: (10 / heroAnimationsConstants.SPEED) * 0.6,
    })
    gsap.to(imGroupRef.current.rotation, {
      keyframes: {
        '0%': { x: THREE.MathUtils.degToRad(-30) },
        '100%': { x: THREE.MathUtils.degToRad(0) },
        easeEach: 'power1.in',
      },
      delay: 1,
      duration: 10 / heroAnimationsConstants.SPEED,
    })
    const imLetters = gsap.utils.toArray(imGroupRef.current.children)
    imLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.from(letter.position, {
        y: -2,
        duration: (10 / heroAnimationsConstants.SPEED) * 0.6,
        delay: 0.1 * index + 2,
        ease: 'power1.in',
      })
      // @ts-ignore
      gsap.from(letter.material, {
        opacity: 0,
        emissiveIntensity: () => {
          return 1
        },
        duration: (10 / heroAnimationsConstants.SPEED) * 0.6,
        delay: 0.25 * index + 1,
        ease: 'power4.in',
      })
    })
  })

  return (
    <Word3D
      ref={imGroupRef}
      keyPrefix={'i_m'}
      font={'fonts/json/Molde_Compressed_Heavy_Regular.json'}
      size={2}
      depth={0.1}
      splittedWord={imTextSplitted}
      groupProps={{
        rotation: new THREE.Euler(THREE.MathUtils.degToRad(-30), 0, 0),
        // position: new THREE.Vector3(0, 4, 0)
      }}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
      lengthRef={lengthRef}
    >
      <meshStandardMaterial
        color={'#049541'}
        transparent
        side={THREE.DoubleSide}
        emissive={'#049541'}
      />
    </Word3D>
  )
}
