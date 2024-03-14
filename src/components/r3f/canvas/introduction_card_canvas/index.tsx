'use client'

import React, { Suspense, createRef, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber'
import { PerspectiveCamera, RoundedBox, Text } from '@react-three/drei'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { useTranslations } from 'next-intl'

import {
  IntroductionCardCanvasInterface,
  IntroductionCardSceneInterface,
} from '@/interfaces/components/r3f/introductionCardInterfaces'

import { LogoRefType } from 'types/logoRefType'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

import { default as IntroductionConstants } from '@/constants/introductionConstants.json'

/* const descriptionFont = '/fonts/json/Monserrat_Bold.json' */

import './index.scss'
import { EffectComposer } from '@react-three/postprocessing'

function IntroducitonCardScene({ content }: IntroductionCardSceneInterface) {
  const { gl } = useThree()
  gl.toneMappingExposure =
    IntroductionConstants.SCENE.CANVAS.TONE_MAPPING_EXPOSURE

  const t = useTranslations('HOME')

  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionSkillCardRef = createRef<LogoRefType>()

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')

    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x =
        -y * IntroductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR
      introductionCardRef.current!.rotation.y =
        -x * IntroductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.FACTOR
      introductionCardRef.current!.scale.x =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
      introductionCardRef.current!.scale.y =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
      introductionCardRef.current!.scale.z =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.FACTOR
    }
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL
      introductionCardRef.current!.rotation.y =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.ROTATION.INITIAL
      introductionCardRef.current!.scale.x =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
      introductionCardRef.current!.scale.y =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
      introductionCardRef.current!.scale.z =
        IntroductionConstants.HANDLE_ON_PONTER_MOVE.SCALE.INITIAL
    }
  }

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[
          IntroductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.X,
          IntroductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.Y,
          IntroductionConstants.SCENE.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
      />
      {/* <ambientLight intensity={10} /> */}
      {IntroductionConstants.SCENE.POINT_LIGHTS.map((point_light, index) => (
        <pointLight
          key={`ìntroduction_scene_point_light_${index}`}
          position={[
            point_light.POSITION.X,
            point_light.POSITION.Z,
            point_light.POSITION.Y,
          ]}
          intensity={point_light.INTENSITY}
          castShadow
        />
      ))}
      <group ref={introductionCardRef}>
        <Text
          /* font={descriptionFont} */
          textAlign={'center'}
          fontSize={IntroductionConstants.CARDS.ROUNDED_CARDS.FONT_SIZE}
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
            IntroductionConstants.CARDS.ROUNDED_CARDS.ARGS.X * 1.2,
            IntroductionConstants.CARDS.ROUNDED_CARDS.ARGS.Y * 1.2,
            IntroductionConstants.CARDS.ROUNDED_CARDS.ARGS.Z * 1.2,
          ]}
          radius={IntroductionConstants.CARDS.ROUNDED_CARDS.RADIUS}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={'#0b0831'}
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
      <EffectComposer>
        <Bloom
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur={false} // Enables or disables mipmap blur.
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        />
      </EffectComposer>
    </>
  )
}

export default function IntroductionCardCanvas({
  content,
}: IntroductionCardCanvasInterface) {
  return (
    <Canvas
      dpr={IntroductionConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: IntroductionConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: IntroductionConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          IntroductionConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <Suspense fallback={null}>
        <IntroducitonCardScene content={content} />
      </Suspense>
    </Canvas>
  )
}
