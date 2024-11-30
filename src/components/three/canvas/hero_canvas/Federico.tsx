import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { Word3D } from './Word3D'

import { getRandomInt } from '@/helpers/animationHelpers'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Federico() {
  const [federicoText] = useState<string>('Federico'.toUpperCase())
  const [federicoTextSplitted] = useState<string[]>(federicoText.split(''))

  const federicoGroupRef = useRef<THREE.Group>(null!)
  const lengthRef = useRef<number[]>([])
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  useGSAP(() => {
    const federicoLetters = gsap.utils.toArray(federicoGroupRef.current.children)
    federicoLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.to(letter.position, {
        keyframes: {
          '0%': {
            x: getRandomInt({ min: 0, max: 20, decimal: 0.1 }),
            z: getRandomInt({ min: 0, max: 10, decimal: 0.1 }),
          },
          '100%': {
            x:
              federicoGroupRef.current.position.x +
              lengthRef.current.slice(0, index).reduce((a, b) => a + b, 0),
            z: 0,
          },
          delay: getRandomInt({ min: 0, max: 20 }) / 5 + index * 0.25,
          easeEach: 'power1.in',
        },
        delay: 1,
        duration: 10 / heroAnimationsConstants.SPEED,
      })
      // @ts-ignore
      gsap.to(letter.material, {
        keyframes: {
          '0%': {
            opacity: 0,
            emissiveIntensity: 0,
          },
          '100%': {
            opacity: 1,
            emissiveIntensity: () => {
              return 1
            },
          },
          delay: getRandomInt({ min: 0, max: 20 }) / 5 + index * 0.25,
          easeEach: 'power1.in',
        },
        delay: 1,
        duration: 10 / heroAnimationsConstants.SPEED,
      })
    })
  })

  return (
    <Word3D
      ref={federicoGroupRef}
      keyPrefix={'federico'}
      font={'fonts/json/Molde_Compressed_Heavy_Regular.json'}
      size={2.2}
      depth={0.1}
      splittedWord={federicoTextSplitted}
      position={new THREE.Vector3(0, 2, 0)}
      center={true}
      lengthRef={lengthRef}
    >
      <meshStandardMaterial
        color={'#ff1377'}
        transparent
        opacity={0}
        side={THREE.DoubleSide}
        emissive={'#ff1377'}
      />
    </Word3D>
  )
}
