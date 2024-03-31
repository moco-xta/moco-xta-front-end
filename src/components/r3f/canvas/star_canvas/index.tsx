import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { useTranslations } from 'next-intl'

import { StarCanvasInterface, StarSceneInterface } from '@/interfaces/r3fInterfaces'

import { Star } from '../../models/reviews/Star'
import RatingStars from '@/components/cards/review_card/rating_stars'

function StarScene({ data }: StarSceneInterface) {

  console.log(data)

  const t = useTranslations('ADD_REVIEW')

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  return (
    <>
      <Star />
      <Html>
        <div
          id='review_card'
        >
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
      </Html>
    </>
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
