import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  useHelper,
} from '@react-three/drei'
import {
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette,
} from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import HomeScene from './HomeScene'
import ToneMapping from './ToneMapping'

import { default as homeConstants } from '@/constants/canvas/homeConstants.json'
import CameraRig from './CameraRig'
import CameraAnimation from './CameraAnimation'

import './index.scss'

const INTENSITY = 1
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 20
const SHADOW_CAMERA_LEFT = -20
const SHADOW_CAMERA_RIGHT = 20
const SHADOW_CAMERA_TOP = 20
const SHADOW_CAMERA_BOTTOM = -20
const SHADOW_RADIUS = 13
const SHADOW_BIAS = 0.0001

const DirectionalLight = () => {
  const ref = useRef<THREE.DirectionalLight>(null!)
  useHelper(ref, THREE.DirectionalLightHelper)

  return (
    <>
      <directionalLight
        ref={ref}
        intensity={INTENSITY}
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
    </>
  )
}

export default function HomeCanvas() {
  return (
    <Canvas
      /* camera={{
        position: [0, 15, 10],
        rotation: [
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
        ],
      }} */
      dpr={homeConstants.CANVAS.DPR}
      legacy={homeConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: homeConstants.CANVAS.GL.ANTIALIAS,
        alpha: homeConstants.CANVAS.GL.ALPHA,
        powerPreference: homeConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      {/* <OrbitControls
        target={[0, 5, 0]}
      /> */}
      {/* <CameraAnimation /> */}
      <PerspectiveCamera
        makeDefault
        position={[0, 5.5, 12]}
        rotation={[
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
        ]}
      />
      <ambientLight intensity={0.25} />
      <DirectionalLight />
      {/* <Environment preset='city' /> */}
      {/* <directionalLight /> */}

      {/* <ScrollControls
        pages={6}
        damping={0.1}
      > */}
      {/* <Scroll> */}
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>
      {/* </Scroll> */}
      {/* <Scroll
          html
          style={{ width: '100%' }}
        > */}
      {/* <section></section> */}
      {/* <h1
            className='title'
            style={{
              color: '#cdcbca',
              position: 'absolute',
              top: `65vh`,
              left: '50%',
              fontSize: '13em',
              transform: `translate(-50%,-50%)`,
            }}
          >
            PHANTOM
          </h1>

          <div
            className='row'
            style={{ position: 'absolute', top: `132vh` }}
          >
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px' }}>
              Featuring a sleek, metallic design inspired by advanced technology, this aftershave
              bottle is as stylish as it is functional. But it's not just a pretty face - inside,
              you'll find a nourishing and protective aftershave formula that will leave your skin
              feeling refreshed and hydrated.
            </p>
            <button>Read more</button>
          </div>

          <div
            className='row'
            style={{ position: 'absolute', top: `230vh` }}
          >
            <div
              className='col'
              style={{ position: 'absolute', right: `40px`, width: '540px' }}
            >
              <h2 style={{ maxWidth: '440px' }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: '440px' }}>
                Featuring a sleek, metallic design inspired by advanced technology, this aftershave
                bottle is as stylish as it is functional. But it's not just a pretty face - inside,
                you'll find a nourishing and protective aftershave formula that will leave your skin
                feeling refreshed and hydrated.
              </p>
              <button>Read more</button>
            </div>
          </div>

          <h2
            style={{
              position: 'absolute',
              top: '350vh',
              left: '50%',
              transform: `translate(-50%,-50%)`,
            }}
          >
            Cutting-Edge of Grooming
          </h2>

          <button
            style={{
              position: 'absolute',
              top: `590vh`,
              left: '50%',
              transform: `translate(-50%,-50%)`,
            }}
          >
            Buy now
          </button> */}
      {/* <FirstSection />
          <SecondSection /> */}
      {/* </Scroll> */}
      {/* </ScrollControls> */}
      {/* <CameraRig> */}
      {/* </CameraRig> */}
      {/* <ToneMapping /> */}

      {/* <EffectComposer multisampling={2}>
          <SMAA />
          <Bloom
            intensity={homeConstants.POST_PROCESSING.BLOOM.INTENSITY}
            kernelSize={KernelSize.LARGE}
            levels={homeConstants.POST_PROCESSING.BLOOM.LEVELS}
            luminanceThreshold={homeConstants.POST_PROCESSING.BLOOM.LUMINANCE_THRESHOLD}
            luminanceSmoothing={homeConstants.POST_PROCESSING.BLOOM.LUMINANCE_SMOOTHING}
            mipmapBlur={homeConstants.POST_PROCESSING.BLOOM.MIPMAP_BLUR}
            opacity={homeConstants.POST_PROCESSING.BLOOM.OPACITY}
            resolutionX={Resolution.AUTO_SIZE}
            resolutionY={Resolution.AUTO_SIZE}
          />
          <DepthOfField
            focusDistance={homeConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_DISTANCE}
            focalLength={homeConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCAL_LENGTH}
            bokehScale={homeConstants.POST_PROCESSING.DEPTH_OF_FIELD.BOKEH_SCALE}
          />
          <HueSaturation
            saturation={0.3}
            hue={0.15}
          />
          <Vignette
            offset={0.65}
            opacity={0.7}
          />
        </EffectComposer> */}
    </Canvas>
  )
}
