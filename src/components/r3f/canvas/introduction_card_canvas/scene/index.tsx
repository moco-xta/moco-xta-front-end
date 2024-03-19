import React, { createRef, useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { IntroductionCardSceneInterface } from '@/interfaces/introductionCardInterfaces'

import { LogoRefType } from 'types/logoRefType'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

export default function Scene({ content }: IntroductionCardSceneInterface) {
  gsap.registerPlugin(useGSAP)

  const t = useTranslations('HOME')

  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionSkillCardRef = createRef<LogoRefType>()

  useGSAP(
    () => {
    },
    { scope: introductionCardRef },
  )

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')
    gsap.to(
      introductionCardRef.current!.rotation,
      {
        duration: 0.2,
        ease: 'power3.out',
        x: -y * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR,
        y: -x * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR,
      },
    )
    gsap.to(
      introductionCardRef.current!.scale,
      {
        duration: 0.2,
        ease: 'power3.out',
        x: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
        y: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
        z: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
      },
    )
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    gsap.to(
      introductionCardRef.current!.rotation,
      {
        duration: 0.2,
        ease: 'power3.out',
        x: introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL,
        y: introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL,
      },
    )
    gsap.to(
      introductionCardRef.current!.scale,
      {
        duration: 0.2,
        ease: 'power3.out',
        x: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
        y: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
        z: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
      },
    )
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
