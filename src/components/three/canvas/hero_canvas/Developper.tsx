import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { Word3D } from './Word3D'

import { default as heroAnimationsConstants } from '@/constants/animations/heroAnimationsConstants.json'

export default function Developper() {
  const t = useTranslations('HOME')

  const [developperText] = useState<string>(t('HERO.DEVELOPPER').toUpperCase())
  const [developperTextSplitted] = useState<string[]>(developperText.split(''))

  const developperGroupRef = useRef<THREE.Group>(null!)
  const box3Ref = useRef<THREE.Box3>(new THREE.Box3())

  return (
    <Word3D
      ref={developperGroupRef}
      keyPrefix={'developper'}
      font={'fonts/json/Aaaiight_Fat_Regular.json'}
      depth={0.1}
      splittedWord={developperTextSplitted}
      position={new THREE.Vector3(0, 0, 0)}
      center={true}
    />
  )
}
