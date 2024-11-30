import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Extra() {
  const t = useTranslations('HOME')

  const [extraText] = useState<string>(t('HERO.EXTRA').toUpperCase())
  const [extraTextSplitted] = useState<string[]>(extraText.split(''))

  const extraGroupRef = useRef<THREE.Group>(null!)
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  return (
    <Word3D
      ref={extraGroupRef}
      keyPrefix={'extra'}
      font={'fonts/json/Aaaiight_Fat_Regular.json'}
      depth={0.1}
      splittedWord={extraTextSplitted}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
    />
  )
}
