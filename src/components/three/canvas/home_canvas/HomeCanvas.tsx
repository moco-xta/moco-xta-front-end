import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
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

import { default as homeConstants } from '@/constants/canvas/homeConstants.json'
import CameraRig from './CameraRig'
import CameraAnimation from './CameraAnimation'

export default function HomeCanvas() {
  return (
    <Canvas
      camera={{
        position: [20, 20, 20],
      }}
      dpr={homeConstants.CANVAS.DPR}
      legacy={homeConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: homeConstants.CANVAS.GL.ANTIALIAS,
        alpha: homeConstants.CANVAS.GL.ALPHA,
        powerPreference: homeConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      {/* <OrbitControls /> */}
      <CameraAnimation />
      <ambientLight intensity={0.75} />
      {/* <directionalLight /> */}
      <Suspense fallback={null}>
        <CameraRig>
          <HomeScene />
        </CameraRig>

        <EffectComposer multisampling={2}>
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
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
