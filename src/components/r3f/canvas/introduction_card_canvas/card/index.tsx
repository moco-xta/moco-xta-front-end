import React, { createRef, useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent, useThree } from '@react-three/fiber'
import { Box, GradientTexture, RoundedBox, Text } from '@react-three/drei'
import { useTranslations } from 'next-intl'

import {
  ForwardRefGltfGroupInterface,
  IntroductionCardSceneInterface,
} from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { degreesToRadians } from '@/helpers/r3fHelpers'

import { default as introductionConstants } from '@/constants/introductionConstants.json'
import { RoundedCard } from '@/components/r3f/models/cards/RoundedCard'

export default function Card({ content }: IntroductionCardSceneInterface) {
  const t = useTranslations('HOME')

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionLogoRef = createRef<ForwardRefGltfGroupInterface>()

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    introductionCardRef,
    introductionConstants.HANDLE_ON_PONTER_MOVE,
  )

  return (
    <group
      ref={introductionCardRef}
      rotation={[degreesToRadians(30), 0, 0]}
    >
      <mesh
        position={[0, 2, 2]}
        receiveShadow
        castShadow
      >
        {/* <boxGeometry
          attach='geometry'
          args={[3, 5, 2]}
        /> */}
        {/* <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial> */}
      </mesh>
      <Text
        textAlign={'center'}
        fontSize={introductionConstants.CARDS.ROUNDED_CARDS.FONT_SIZE}
        position={[
          content.description.position.x,
          content.description.position.z,
          content.description.position.y,
        ]}
        receiveShadow
        castShadow
      >
        {t(`INTRODUCTION.CARDS.${content.description.key}`)}
      </Text>
      <RoundedCard
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
      />
      <content.logo.component
        ref={introductionLogoRef}
        key={`introduction_skill_card_${content.name}`}
        position={
          new THREE.Vector3(
            content.logo.position.x,
            content.logo.position.z,
            content.logo.position.y,
          )
        }
        scale={
          new THREE.Vector3(
            content.logo.scale.x,
            content.logo.scale.z,
            content.logo.scale.y,
          )
        }
      />
    </group>
  )
}