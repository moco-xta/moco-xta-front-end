import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={
          heroConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_DISTANCE
        }
        focalLength={heroConstants.POST_PROCESSING.DEPTH_OF_FIELD.FOCUS_LENGTH}
        bokehScale={heroConstants.POST_PROCESSING.DEPTH_OF_FIELD.BOKEH_SCALE}
      />
      <Bloom
        intensity={heroConstants.POST_PROCESSING.BLOOM.INTENSITY}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={
          heroConstants.POST_PROCESSING.BLOOM.LUMINANCE_THRESHOLD
        }
        luminanceSmoothing={
          heroConstants.POST_PROCESSING.BLOOM.LUMINANCE_SMOOTHING
        }
        mipmapBlur={heroConstants.POST_PROCESSING.BLOOM.MIPMAP_BLUR}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
