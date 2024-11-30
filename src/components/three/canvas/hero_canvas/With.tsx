import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function With() {
  const t = useTranslations('HOME')

  const [withText] = useState<string>(t('HERO.WITH').toUpperCase())
  const [withTextSplitted] = useState<string[]>(withText.split(''))

  const withGroupRef = useRef<THREE.Group>(null!)
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  return (
    <Word3D
      ref={withGroupRef}
      keyPrefix={'with'}
      font={'fonts/json/Aaaiight_Fat_Regular.json'}
      depth={0.1}
      splittedWord={withTextSplitted}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
    />
  )
}
