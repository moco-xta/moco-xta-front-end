import React, { createRef, useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import { useTranslations } from 'next-intl'

import { IntroductionCardSceneInterface } from '@/interfaces/introductionCardInterfaces'

import { LogoRefType } from 'types/logoRefType'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

export default function Scene({ content }: IntroductionCardSceneInterface) {
  const t = useTranslations('HOME')

  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionSkillCardRef = createRef<LogoRefType>()

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')

    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x =
        -y * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR
      introductionCardRef.current!.rotation.y =
        -x * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR
      introductionCardRef.current!.scale.x =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
      introductionCardRef.current!.scale.y =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
      introductionCardRef.current!.scale.z =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
    }
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x =
        introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL
      introductionCardRef.current!.rotation.y =
        introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL
      introductionCardRef.current!.scale.x =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
      introductionCardRef.current!.scale.y =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
      introductionCardRef.current!.scale.z =
        introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
    }
  }

  return (
    <group ref={introductionCardRef}>
      <Text
        /* font={descriptionFont} */
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
      <RoundedBox
        name='introduction_card'
        args={[
          introductionConstants.CARDS.ROUNDED_CARDS.ARGS.X,
          introductionConstants.CARDS.ROUNDED_CARDS.ARGS.Y,
          introductionConstants.CARDS.ROUNDED_CARDS.ARGS.Z,
        ]}
        radius={introductionConstants.CARDS.ROUNDED_CARDS.RADIUS}
        onPointerMove={handleOnPointerMove}
        onPointerOut={handleOnPointerLeave}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          attach='material'
          color={
            new THREE.Color(introductionConstants.CARDS.ROUNDED_CARDS.COLOR)
          }
          roughness={1}
          metalness={0}
        />
      </RoundedBox>
      <content.logo.component
        key={`introduction_skill_card_${content.name}`}
        ref={introductionSkillCardRef}
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
