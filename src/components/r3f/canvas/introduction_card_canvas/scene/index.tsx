import React, { useRef } from 'react'
import * as THREE from 'three'
import { ThreeEvent } from '@react-three/fiber'
import { Box, GradientTexture, RoundedBox, Text } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTranslations } from 'next-intl'

import { IntroductionCardSceneInterface } from '@/interfaces/introductionCardInterfaces'

import { degreesToRadians, getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

export default function Scene({ content }: IntroductionCardSceneInterface) {
  gsap.registerPlugin(useGSAP)

  const t = useTranslations('HOME')

  const introductionCardRef = useRef<THREE.Group>(null!)

  useGSAP(() => {}, { scope: introductionCardRef })

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')
    gsap.to(introductionCardRef.current!.rotation, {
      duration: 0.2,
      ease: 'power3.out',
      x: -y * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR,
      y: -x * introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR,
    })
    gsap.to(introductionCardRef.current!.scale, {
      duration: 0.2,
      ease: 'power3.out',
      x: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
      y: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
      z: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR,
    })
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    gsap.to(introductionCardRef.current!.rotation, {
      duration: 0.2,
      ease: 'power3.out',
      x: introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL,
      y: introductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL,
    })
    gsap.to(introductionCardRef.current!.scale, {
      duration: 0.2,
      ease: 'power3.out',
      x: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
      y: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
      z: introductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL,
    })
  }

  return (
    <group ref={introductionCardRef} rotation={[degreesToRadians(30), 0, 0]}>
      <mesh
        position={[0, 2, 2]}
        receiveShadow
        castShadow
      >
        <boxGeometry
          attach='geometry'
          args={[3, 5, 2]}
        />
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
        <meshStandardMaterial
          attach='material'
          /* color={
            new THREE.Color(introductionConstants.CARDS.ROUNDED_CARDS.COLOR)
          } */
          /* color={0xdcff00} */
          color={0xff194c}
          roughness={1}
          emissive={0xff194c}
          emissiveIntensity={2}
          /* metalness={0} */
        />
      </RoundedBox>
      {/* <content.logo.component
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
      /> */}
    </group>
  )
}
