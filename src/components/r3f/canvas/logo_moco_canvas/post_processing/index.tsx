import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as logoMocoConstants } from '@/constants/canvas/logoMocoConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={
          logoMocoConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_DISTANCE
        }
        focalLength={
          logoMocoConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCAL_LENGTH
        }
        bokehScale={
          logoMocoConstants.POST_PROCESSING.DEPTH_OF_FIELD.BOKEH_SCALE
        }
      />
      <Bloom
        intensity={logoMocoConstants.POST_PROCESSING.BLOOM.INTENSITY}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={
          logoMocoConstants.POST_PROCESSING.BLOOM.LUMINANCE_THRESHOLD
        }
        luminanceSmoothing={
          logoMocoConstants.POST_PROCESSING.BLOOM.LUMINANCE_SMOOTHING
        }
        mipmapBlur={logoMocoConstants.POST_PROCESSING.BLOOM.MIPMAP_BLUR}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
