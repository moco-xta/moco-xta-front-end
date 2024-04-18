import React, { useRef } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { RoundedBox, Text } from '@react-three/drei'
import pointer from 'json-pointer'
import { useTranslations } from 'next-intl'

import { ReviewCardInterface } from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { Star } from '@/components/r3f/models/reviews/Star'

import { default as reviewConstants } from '@/constants/reviewConstants.json'

export default function ReviewCard({ data }: ReviewCardInterface) {
  const t = useTranslations('ADD_REVIEW')

  const reviewCardRef = useRef<THREE.Group>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    reviewCardRef,
    reviewConstants.HANDLE_ON_PONTER_MOVE,
  )

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  return (
    <group
      ref={reviewCardRef}
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(reviewConstants.CARD.ROTATION.X),
          THREE.MathUtils.degToRad(reviewConstants.CARD.ROTATION.Y),
          THREE.MathUtils.degToRad(reviewConstants.CARD.ROTATION.Z),
        )
      }
    >
      <Star
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />

      <RoundedBox
        name='introduction_card'
        args={[0.9, 1.1, 0.02]}
        position={[0, 0, 0.3]}
        radius={0.02}
        smoothness={4}
        bevelSegments={0}
        creaseAngle={0.4}
        receiveShadow
        castShadow
      >
        {/* {data.review && <Text scale={[0.1, 0.1, 0.1]}>&quot;</Text>}
        <Text scale={[0.1, 0.1, 0.1]}>{data.review}</Text>
        {data.review && <Text scale={[0.1, 0.1, 0.1]}>&quot;</Text>}
        <Text scale={[0.1, 0.1, 0.1]}>{data.firstName}</Text>
        {data.role && (
          <Text scale={[0.1, 0.1, 0.1]}>{t(`ROLES.${data.role}`)}</Text>
        )} */}
        <meshStandardMaterial
          attach='material'
          color={'white'}
          transparent
          opacity={0.5}
        />
      </RoundedBox>
    </group>
  )
}
