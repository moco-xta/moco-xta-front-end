import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import Letter3D from './Letter3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function A() {
  const t = useTranslations('HOME')

  const [aText] = useState<string>(t('HERO.A').toUpperCase())

  const aGroupRef = useRef<THREE.Group>(null!)
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  return (
    <Letter3D
      keyPrefix={'a'}
      font={'fonts/json/Aaaiight_Fat_Regular.json'}
      size={1}
      depth={0.1}
      letter={aText}
    />
  )
}
