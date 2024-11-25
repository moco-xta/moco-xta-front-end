import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import './index.scss'

export default function Heading() {
  const t = useTranslations('HOME')

  const [hiText] = useState<string>(t('HERO.HI').toUpperCase())
  const [iMAText] = useState<string>(t('HERO.I_M_A').toUpperCase())
  const [creativeText] = useState<string>(t('HERO.CREATIVE').toUpperCase())
  const [developperText] = useState<string>(t('HERO.DEVELOPPER').toUpperCase())

  const [hiTextSplitted] = useState<string[]>(hiText.split(''))
  const [iMATextSplitted] = useState<string[]>(iMAText.split(''))
  const [creativeTextSplitted] = useState<string[]>(creativeText.split(''))
  const [developperTextSplitted] = useState<string[]>(developperText.split(''))

  const hiRef = useRef<THREE.Group>(null!)
  const iMARef = useRef<THREE.Group>(null!)
  const creativeRef = useRef<THREE.Group>(null!)
  const developperRef = useRef<THREE.Group>(null!)

  useGSAP(() => {
    const creativeLetters = gsap.utils.toArray(creativeRef.current.children)
    const developpersLetters = gsap.utils.toArray(developperRef.current.children)
    creativeLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.from(letter.position, {
        y: -1.5,
        delay: 0.1 * index,
        duration: 0.25,
        ease: 'none',
      })
      // @ts-ignore
      gsap.from(letter.material, {
        opacity: 0,
        delay: 0.1 * index,
        duration: 0.5,
        ease: 'none',
      })
    })
    gsap.from(developperRef.current.position, {
      y: -2,
      delay: 1,
      duration: 0.1,
      ease: 'none',
    })
    developpersLetters.forEach((letter, index) => {
      // @ts-ignore
      gsap.from(letter.material, {
        opacity: 0,
        delay: 1,
        duration: 0.1,
        ease: 'none',
      })
    })
  })

  return (
    <group>
      <Word3D
        ref={hiRef}
        keyPrefix={'creative'}
        splittedWord={hiTextSplitted}
        position={new THREE.Vector3(0, 2.2, 0)}
      />
      <Word3D
        ref={iMARef}
        keyPrefix={'creative'}
        splittedWord={iMATextSplitted}
        position={new THREE.Vector3(0, 1.1, 0)}
      />
      <Word3D
        ref={creativeRef}
        keyPrefix={'creative'}
        splittedWord={creativeTextSplitted}
      />
      <Word3D
        ref={developperRef}
        keyPrefix={'developper'}
        splittedWord={developperTextSplitted}
        position={new THREE.Vector3(0, -1.1, 0)}
      />
    </group>
  )
}
