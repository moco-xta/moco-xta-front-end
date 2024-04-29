import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as reviewConstants } from '@/constants/canvas/reviewConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={
          reviewConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_DISTANCE
        }
        focalLength={
          reviewConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_LENGTH
        }
        bokehScale={reviewConstants.POST_PROCESSING.DEPTH_OF_FIELD.BOKEH_SCALE}
      />
      <Bloom
        intensity={reviewConstants.POST_PROCESSING.BLOOM.INTENSITY}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={
          reviewConstants.POST_PROCESSING.BLOOM.LUMINANCE_THRESHOLD
        }
        luminanceSmoothing={
          reviewConstants.POST_PROCESSING.BLOOM.LUMINANCE_SMOOTHING
        }
        mipmapBlur={reviewConstants.POST_PROCESSING.BLOOM.MIPMAP_BLUR}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
