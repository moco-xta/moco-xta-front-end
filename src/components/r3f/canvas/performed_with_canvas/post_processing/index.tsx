import React from 'react'
import * as THREE from 'three'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import {
  Bloom,
  ChromaticAberration,
  ColorAverage,
  DotScreen,
  Glitch,
  LensFlare,
  Noise,
  Scanline,
  SMAA,
  SSAO,
  Vignette,
} from '@react-three/postprocessing'
import {
  BlendFunction,
  BlurPass,
  GlitchMode,
  Resizer,
  KernelSize,
  Resolution,
} from 'postprocessing'
import { PerspectiveCamera } from '@react-three/drei'
import { Leva, folder, useControls } from 'leva'

export default function PostProcessing() {
  const { focusDistance, focalLength, bokehScale } = useControls({
    focusDistance: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.001,
    },
    focalLength: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.001,
    },
    bokehScale: {
      value: 0.25,
      min: 0,
      max: 10,
      step: 0.1,
    },
  })

  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={focusDistance}
        focalLength={focalLength}
        bokehScale={3}
      />
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
  )
}
