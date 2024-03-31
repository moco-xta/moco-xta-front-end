import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  RoundedBox,
  Text,
} from '@react-three/drei'
import { useTranslations } from 'next-intl'

import {
  StarCanvasInterface,
  StarSceneInterface,
} from '@/interfaces/r3fInterfaces'

import useModelHoverEffect from '@/hooks/useModelHoverEffect'

import { Star } from '../../models/reviews/Star'
import RatingStars from '@/components/cards/review_card/rating_stars'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

import './index.scss'

function StarScene({ data }: StarSceneInterface) {
  const t = useTranslations('ADD_REVIEW')

  const reviewCardRef = useRef<THREE.Group>(null!)

  const { handleOnPointerMove, handleOnPointerLeave } = useModelHoverEffect(
    reviewCardRef,
    introductionConstants.HANDLE_ON_PONTER_MOVE,
  )

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  return (
    <group ref={reviewCardRef}>
      <Star
        handleOnPointerMove={handleOnPointerMove}
        handleOnPointerLeave={handleOnPointerLeave}
      />

      <RoundedBox
        name='introduction_card'
        args={[0.9, 1.1, 0.02]}
        position={[0, 0, 0.3]}
        radius={0.02} // Radius of the rounded corners. Default is 0.05
        smoothness={4} // The number of curve segments. Default is 4
        bevelSegments={0} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
        creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
        receiveShadow
        castShadow
      >
        <Text scale={[0.1, 0.1, 0.1]}>
          hello world!
        </Text>

        {data.review && <Text scale={[0.1, 0.1, 0.1]}>&quot;</Text>}
        <Text scale={[0.1, 0.1, 0.1]}>{data.review}</Text>
        {data.review && <Text scale={[0.1, 0.1, 0.1]}>&quot;</Text>}
        {/* <Html>
          {data.rating !== 0 && (
            <div className='rating_stars_container'>
              <RatingStars rating={data.rating} />
            </div>
          )}
        </Html> */}
        <Text scale={[0.1, 0.1, 0.1]}>{data.name}</Text>
        {data.role && <Text scale={[0.1, 0.1, 0.1]}>{t(`ROLES.${data.role}`)}</Text>}
        <meshStandardMaterial
          attach='material'
          color={'white'}
          transparent
          opacity={0.5}
        />
      </RoundedBox>
      {/* <Html
        transform
        position={[0, 0, 0.5]}
        scale={[0.15, 0.15, 0.15]}
        onPointerMove={(e) => {
          e.stopPropagation();
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
        }}
      >
        <div id='review_card'>
          {data.review && <p className='quote_up'>&quot;</p>}
          <p className='review'>{data.review}</p>
          {data.review && <p className='quote_down'>&quot;</p>}
          {data.rating !== 0 && (
            <div className='rating_stars_container'>
              <RatingStars rating={data.rating} />
            </div>
          )}
          <div className='name_role_container'>
            <p className='name'>{data.name}</p>
            {data.role && <p className='role'>{t(`ROLES.${data.role}`)}</p>}
          </div>
        </div>
      </Html> */}
    </group>
  )
}

export default function StarCanvas({ data }: StarCanvasInterface) {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[-0.1, 0, 4]}
        fov={30}
        near={0.1}
        far={55}
      />
      <OrbitControls />
      <pointLight
        position={[2, 2, 2]}
        intensity={100}
        castShadow
      />
      <pointLight
        position={[-2, 2, 2]}
        intensity={100}
        castShadow
      />
      <pointLight
        position={[-0, -1.5, 2]}
        intensity={100}
        castShadow
      />
      <ambientLight />
      <Suspense>
        <Environment
          files='/img/hdr/gradient-fluid-liquid-wallpaper-1_1562-669.hdr'
          encoding={THREE.LinearEncoding}
        />
        <StarScene data={data} />
      </Suspense>
    </Canvas>
  )
}
