import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Box, Text, Text3D, useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'
import Letter3D from './Letter3D'
import { Word3D } from './Word3D'

export default function Heading() {
  const [creativeText] = useState<string>('creative'.toUpperCase())
  const [creativeTextSplitted] = useState<string[]>(creativeText.split(''))

  const creativeRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    let letters = gsap.utils.toArray(creativeRef.current.children)
    letters.forEach((letter, index) => {
      // @ts-ignore
      gsap.from(letter.position, {
        y: -1,
        delay: 0.1 * index,
        duration: 0.5,
        ease: 'none',
      })
      // @ts-ignore
      gsap.from(letter.material, {
        opacity: -1,
        delay: 0.1 * index,
        duration: 0.5,
        ease: 'none',
      })
    })
  })

  return (
    <Word3D
      ref={creativeRef}
      keyPrefix={'creative'}
      splittedWord={creativeTextSplitted}
    />
  )
}
