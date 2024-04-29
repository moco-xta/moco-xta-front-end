import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Center, RoundedBox, Text, Text3D } from '@react-three/drei'
import { useTranslations } from 'next-intl'
import { IoStarSharp } from 'react-icons/io5'

import { ReviewCardInterface } from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { Star } from '@/components/r3f/models/reviews/Star'
import { RatingStar } from '@/components/r3f/models/reviews/RatingStar'

import { default as reviewConstants } from '@/constants/canvas/reviewConstants.json'
import { default as fontsConstants } from '@/constants/fontsConstants.json'

export default function ReviewCard({ data }: ReviewCardInterface) {
  const t = useTranslations('ADD_REVIEW')

  const reviewCardRef = useRef<THREE.Group>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    reviewCardRef,
    reviewConstants.HANDLE_ON_PONTER_MOVE,
  )

  const textOptions = {
    size: 0.75,
    depth: 5,
  }

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
        {/* {data.review && (
          <Text
            position={[1, 2, 1]}
            scale={[0.1, 0.1, 0.1]}
            color={'black'}
          >
            &quot;
          </Text>
        )} */}
        <Center>
          <Text3D
            font={fontsConstants.JSON.RUBIK_BLACK}
            receiveShadow
            castShadow
            {...textOptions}
            position={[0, 0.3, 0.05]}
            scale={[0.1, 0.1, 0.1]}
            /* textAlign='justify' */
            /* maxWidth={7} */
            /* color={'black'} */
            /* anchorX='center' */
            /* anchorY='middle' */
          >
            &quot;{data.review}&quot;
          </Text3D>
        </Center>
        <Text
          position={[0, 0.3, 0.05]}
          scale={[0.1, 0.1, 0.1]}
          textAlign='justify'
          maxWidth={7}
          color={'black'}
          anchorX='center'
          anchorY='middle'
        >
          &quot;{data.review}&quot;
        </Text>
        <group position={[-0.425 + 0.17 / 2, 0, 0.1]}>
          {[...Array(5)].map((_, index) => {
            return (
              <RatingStar
                key={`rating_star_review_card_${index}`}
                position={[0.17 * index, 0, 0]}
                color={
                  data.rating >= index
                    ? new THREE.Color(0xffd700)
                    : new THREE.Color(0x404040)
                }
              />
            )
          })}
        </group>
        <Text
          position={[0, -0.3, 0]}
          scale={[0.1, 0.1, 0.1]}
          maxWidth={7}
          textAlign={'right'}
          color={'black'}
          anchorX='center'
          anchorY='middle'
        >
          {data.firstName}
        </Text>
        {data.role && (
          <Text
            position={[1, 1, 1]}
            scale={[0.1, 0.1, 0.1]}
          >
            {t(`ROLES.${data.role}`)}
          </Text>
        )}
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
