import React, { createRef, useRef } from 'react'
import * as THREE from 'three'
import { Box, Text3D } from '@react-three/drei'

import {
  ForwardRefGltfGroupInterface,
  IntroductionCardSceneInterface,
} from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { default as introductionConstants } from '@/constants/introductionConstants.json'
import { default as fontsConstants } from '@/constants/fontsConstants.json'

export default function Card({ content }: IntroductionCardSceneInterface) {
  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionLogoRef = createRef<ForwardRefGltfGroupInterface>()

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    introductionCardRef,
    introductionConstants.HANDLE_ON_PONTER_MOVE,
  )

  const textOptions = {
    size: 0.75,
    depth: 5,
  }

  const colors = [
    0xbf1421, 0xe94e21, 0xef9309, 0xfab236, 0xf6e91e, 0xdcdc03, 0x94c01f, 0x3ba934, 0x1b8d3b,
  ]

  return (
    <group ref={introductionCardRef}>
      {content.category.text.map((text, index) => {
        return (
          <Text3D
            key={`text_${content.name}_${index}`}
            font={fontsConstants.JSON.RUBIK_BLACK}
            receiveShadow
            castShadow
            {...textOptions}
            position={[
              content.category.position[index].x,
              content.category.position[index].y,
              content.category.position[index].z,
            ]}
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
        position={[content.rate.position.x, content.rate.position.y, content.rate.position.z]}
      >
        {`${content.rate.value}%`}
        <meshStandardMaterial
          color={colors[content.rate.value / 10 - 1]}
          emissive={content.rate.value / 10 - 1}
          emissiveIntensity={0.5}
          side={THREE.DoubleSide}
        />
      </Text3D>
      {[...Array(content.rate.value / 10)].map((_, index) => {
        return (
          <Box
            key={`rate_box_${content.name}_${index}`}
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
