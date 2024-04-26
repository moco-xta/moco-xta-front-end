import React, { createRef, useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent, extend, useThree } from '@react-three/fiber'
import {
  Box,
  Center,
  GradientTexture,
  RoundedBox,
  Text,
  Text3D,
} from '@react-three/drei'
import { FontLoader, TextGeometry } from 'three/examples/jsm/Addons.js'
import { useTranslations } from 'next-intl'

import upheaval from '@/assets/Upheaval.json'
import pixelifySans from '@/assets/Pixelify_Sans.json'

import {
  ForwardRefGltfGroupInterface,
  IntroductionCardSceneInterface,
} from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { degreesToRadians } from '@/helpers/r3fHelpers'

import { default as introductionConstants } from '@/constants/introductionConstants.json'
import { RoundedCard } from '@/components/r3f/models/cards/RoundedCard'
import { ComputerFrontEnd } from '@/components/r3f/models/introduction/ComputerFrontEnd'
import { ServerBackEnd } from '@/components/r3f/models/introduction/ServerBackEnd'
import { HeartThreeD } from '@/components/r3f/models/introduction/HeartThreeD'

import { default as fontsConstants } from '@/constants/fontsConstants.json'
import { Angular } from '@/components/r3f/models/introduction/Angular'
import { Spring } from '@/components/r3f/models/introduction/Spring'
import { Nextjs } from '@/components/r3f/models/introduction/Nextjs'

extend({ TextGeometry })

export default function Card({
  content,
  index,
}: IntroductionCardSceneInterface) {
  const t = useTranslations('HOME')

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  const font = new FontLoader().parse(pixelifySans)

  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionLogoRef = createRef<ForwardRefGltfGroupInterface>()

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    introductionCardRef,
    introductionConstants.HANDLE_ON_PONTER_MOVE,
  )

  const text = 'Front-End\n90%'

  const textOptions = {
    size: 0.75,
    depth: 5,
  }

  const colors = [
    0xbf1421, 0xe94e21, 0xef9309, 0xfab236, 0xf6e91e, 0xdcdc03, 0x94c01f,
    0x3ba934, 0x1b8d3b,
  ]

  return (
    <group ref={introductionCardRef}>
      {/* <Text
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
      </Text> */}
      {/* <mesh>
        @ts-ignore
        <textGeometry args={[`Font-End${'<br>'} 90%`, { font, size: 1, height: 1 }]} />
        <meshNormalMaterial
          attach={'material'}
          side={THREE.DoubleSide}
        />
      </mesh> */}
      {content.category.text.map((text, index) => {
        return (
          <Text3D
            font={fontsConstants.JSON.RUBIK_BLACK}
            receiveShadow
            castShadow
            {...textOptions}
            position={[content.category.position[index].x, content.category.position[index].y, content.category.position[index].z]}
          >
            {text}
            <meshStandardMaterial
              color={0x00cc00}
              side={THREE.DoubleSide}
            />
          </Text3D>
        )
      })}
      <Text3D
        font={fontsConstants.JSON.RUBIK_BLACK}
        receiveShadow
        castShadow
        {...textOptions}
        position={[
          content.rate.position.x,
          content.rate.position.y,
          content.rate.position.z,
        ]}
      >
        {`${content.rate.value}%`}
        <meshStandardMaterial
          color={colors[(content.rate.value / 10) - 1]}
          emissive={(content.rate.value / 10) - 1}
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </Text3D>
      {[...Array(content.rate.value / 10)].map((_, index) => {
        return (
          <Box
            args={[2, 0.4, 1.2]}
            position={[2, 0.44 * index - 4, 1]}
            receiveShadow
            castShadow
          >
            <meshStandardMaterial
              attach={'material'}
              color={colors[index]}
              emissive={colors[index]}
              emissiveIntensity={0.5}
            />
          </Box>
        )
      })}
      <content.logo.component
        ref={introductionLogoRef}
        key={`introduction_skill_card_${content.name}`}
        scale={content.logo.scale}
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
      />
    </group>
  )
}
