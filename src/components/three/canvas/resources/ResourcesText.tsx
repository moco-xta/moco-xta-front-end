import React from 'react'
import * as THREE from 'three'
import { useTranslations } from 'next-intl'

import useSplitted3DText from '@/hooks/animations/useSplitted3DText'

import { Word3D } from '@/components/three/lib/word_3d/Word3D'

import { getGreetingTextsDefaultValues } from '@/data/home/hero/three/greeting/texts/greetingTextsData'
import {
  hiTextDefaultValues,
  getHiTextAnimationsData,
} from '@/data/home/hero/three/greeting/texts/hiTextData'

import { animate } from '@/animations/index'
import { RigidBody } from '@react-three/rapier'

export default function ResourcesText() {
  const t = useTranslations('HOME')
  const { textSplitted, textGroupRef, textLengthRef } = useSplitted3DText('resources')

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      colliders={'cuboid'}
    >
      <Word3D
        ref={textGroupRef}
        name='resources'
        position={new THREE.Vector3(0, 0, 0)}
        {...getGreetingTextsDefaultValues.geometry}
        splittedWord={textSplitted}
        lengthRef={textLengthRef}
      >
        <meshStandardMaterial color={'white'} />
      </Word3D>
    </RigidBody>
  )
}
